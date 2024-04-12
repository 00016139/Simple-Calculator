#! /usr/bin/env node

import inquirer from "inquirer";

const Answer = await inquirer.prompt([
  { message: "Entre First Number", type: "number", name: "First_Number" },
  { message: "Entre Second Number", type: "number", name: "Second_Number" },
  {
    message: "Select one of the Operators to Perform the Action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// make conditions

if(Answer.Operator === "Addition") {
  console.log(Answer.First_Number + Answer.Second_Number);
} else if(Answer.Operator === "Subtraction") {
  console.log(Answer.First_Number - Answer.Second_Number);
} else if(Answer.Operator === "Multiplication") {
  console.log(Answer.First_Number * Answer.Second_Number);
} else if(Answer.Operator === "Division") {
  console.log(Answer.First_Number / Answer.Second_Number);
} else {
  console.log("Your Operator is Invalid");
}