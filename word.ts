#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let answer =await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a Sentence"
    }
])

let word =answer.sentence.trim().split(" ")
console.log(word)
console.log(`Word Count: ${word.length}`)
