// array of questions for user
const inquirer = require('inquirer');
var fs = require("fs");

inquirer
    .prompt([

        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message:"What is the name of your project?",
            name: "project"
        },
        {
            type: "input",
            message: "Write a short description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "Why did you build this?",
            name: "purpose"

        },
        {
            type: "input",
            message: "What technologies did you use?",
            name: "technologies"
        },
        {
            type: "input",
            message: "What type of license does it use?",
            name: "license"
        },
        {
            type: "input",
            message: "What command needs to be run to install dependencies?",
            name: "dependencies"
        },
        {
            type: "input",
            message: "What command nees to be run to run tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "Who, if anyone, helped with this project?",
            name: "workers"
        },
        {
            type: "input",
            message: "how may other users contribute to the repo?",
            name: "contributing"
        },


]);


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
