// array of questions for user
const inquirer = require('inquirer');
var fs = require("fs");
const { rejects } = require('assert');


//using inquirer
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
            message: "How do you use the repo?",
            name: "using"
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

    ]).then((answers) => {

        let readme = `
# ${answers.project}

# TABLE OF CONTENTS

* [Description](#DESCRIPTION)
* [Usage](#USAGE)
* [Installation](#INSTALLATION)
* [Tests](#TESTS)
* [License](#LICENSE)
* [Contributing](#CONTRIBUTING)
* [Questions](#QUESTIONS)


## DESCRIPTION
  What it is and why it was built:
${answers.description}
${answers.purpose}
 Technologies used on this product:
${answers.technologies}

## USAGE
How to use the repo:
${answers.using}



## INSTALLATION
Command(s) to run to install dependencies:
${answers.dependencies}

## TESTS
Command(s) to run to test:
${answers.tests}


## LICENSE:
${answers.license}


## CONTRIBUTING
Who contributed to this project:
${answers.workers}
 Others may contribute by:
${answers.contributing}

## QUESTIONS
GitHub Username:
${answers.username}

Email Contact:
${answers.email}


`

// function to write README file
fs.writeFile('README.md', readme, error => {
    if  (error) {

        rejects(error);
        return;
    }

  })
 })