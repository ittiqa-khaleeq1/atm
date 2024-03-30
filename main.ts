#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;   //Dollars
let myPin = 12345;

let pinAnswer = await inquirer.prompt([
	{
		name: "pin",
		message: "Enter your Pin",
		type: "number"
	}
]);

if (pinAnswer.pin === myPin) {
	console.log("Correct pin code!!");

	let operationAns = await inquirer.prompt([
		{
			name: "operation",
			message: "Please select an option",
			type: "list",
			choices: ["withdraw", "check balance", "fast cash"]
		}
	]);

	if (operationAns.operation === "withdraw") {
		let amountAns = await inquirer.prompt([
			{
				name: "amount",
				message: "Enter your amount",
				type: "number"
			}
		]);
		//nested condition is here below for the completion of homework given in ramadan coding night 5
		if (amountAns.amount <= myBalance) {
			myBalance -= amountAns.amount;
			// console.log("Your remaining balance is: " + myBalance);
			console.log(`Your remaining balance is: ${myBalance}`);  //concatenation to template literals
			//(line 40 and 41) commented coding as it is taught in ramadan coding night 5
			// =, -=, +=
			// myBalance -= amountAns.amount;
		}

		else if (amountAns.amount > myBalance) {
			console.log("Insufficient balance!");
		}
	}
	else if (operationAns.operation === "check balance") {
		// console.log("Your balance is: " + myBalance);
		console.log(`Your balance is: ${myBalance}`); //concatenation to template literals
	}
	//homework completion here as well of "fast cash"
	else if (operationAns.operation === "fast cash") {
		let fastCashAns = await inquirer.prompt([
			{
				name: "fastcash",
				message: "select your amount",
				type: "list",
				choices: ["1000", "2000", "5000", "10000"]
			}
		]);
		myBalance -= fastCashAns.fastcash;
		console.log(`Your remaining balance is: ${myBalance}`);
	}

}

else {
	console.log("Incorrect pin code");
}