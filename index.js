#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter 1st number : "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter 2nd number : "
    },
    {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select operator to perform operation "
    }
]);
let num1 = answer.num1;
let num2 = answer.num2;
let operator = answer.operator;
if (operator === "Addition") {
    console.log("Your result is : " + (num1 + num2));
}
else if (operator === "Subtraction") {
    console.log("Your result is : " + (num1 - num2));
}
else if (operator === "Multiplication") {
    console.log("Your result is : " + (num1 * num2));
}
else if (operator === "Division") {
    console.log("Your result is : " + (num1 / num2));
}
else {
    console.log("Invalid operator!");
}
