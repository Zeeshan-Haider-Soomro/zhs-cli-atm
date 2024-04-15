#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1020;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            { name: "amount", message: "enter your amount", type: "number" },
        ]);
        myBalance -= amountAnswer.amount;
        console.log("your remaining balance is : " + myBalance);
    }
    if (operationAnswer.operation === "check balance") {
        console.log(10000);
    }
}
else {
    console.log("Incorrect pin code !!");
}
