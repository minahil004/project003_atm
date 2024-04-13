#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let pin = 4444;
const answers = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter your PIN"
    }
]);
if (answers.pincode === pin) {
    console.log("your current balance is = ", balance);
    const answers = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            choices: ["withdraw", "balanceInquiery"],
            message: "choose any option from following"
        }
    ]);
    if (answers.option === "withdraw") {
        const answers = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["10000", "5000", "2000", "1000", "other amount"],
                message: "enter amount"
            }
        ]);
        if (answers.amount === "10000" && answers.amount <= balance) {
            balance -= answers.amount;
            console.log("your current balance is = ", balance);
        }
        else if (answers.amount === "5000" && answers.amount <= balance) {
            balance -= answers.amount;
            console.log("your current balance is = ", balance);
        }
        else if (answers.amount === "2000" && answers.amount <= balance) {
            balance -= answers.amount;
            console.log("your current balance is = ", balance);
        }
        else if (answers.amount === "1000" && answers.amount <= balance) {
            balance -= answers.amount;
            console.log("your current balance is = ", balance);
        }
        else if (answers.amount === "other amount") {
            const answers = await inquirer.prompt([
                {
                    name: "otherAmount",
                    type: "number",
                    message: "enter amount"
                }
            ]);
            if (answers.otherAmount <= balance) {
                balance -= answers.otherAmount;
                console.log("your current balance is = ", balance);
            }
        }
        else {
            console.log("enter valid amount less than your current account balance.");
        }
    }
    else if (answers.option === "balanceInquiery") {
        console.log("Your current account balance is =  ", balance);
    }
    else {
        console.log("please select a vlaid option");
    }
}
else {
    console.log("Enter a valid PIN code.");
}
