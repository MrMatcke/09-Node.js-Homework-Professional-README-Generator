// TODO: Include packages needed for this application
const fs = require
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/genrateMarkdown");

// TODO: Create an array of questions for user input
//Project name
const questions = [
    {
        type: "input",
        message: "What is your project's name?"
        name: "project"
    }
//Project version
{
    type: "input",
    message: "What is the version?"
    name: "version"
}
//Project description
{
    type: "input",
    message: "Type in description of project."
    name: "description"
}
//Project homepage
{
    type: "input",
    message: "Enter project's homepage or skip"
    name: "homepage"
}
//Project documentation url
{
    type: "input",
    message: "Please provide documentation url (optional)"
    name:"documentation"
}
//Project's author's name
{
    type: "input",
    message: "Enter the author's name."
    name: "author"
}
//Project Github username
{
    type: "input",
    message: "Enter the github."
    name: "github"
}
//Project Twitter User name
{
    type: "input",
    message: "Please include twitter handle. (optional)"
    name: "twitter"
}
//Project prerquisites
{
    type: "input",
    message: "Enter in any prerequisites"
    name: "prerquisites"
}
//Project license name
{
    type: "input",
    message: "Add in license name (optional)"
    name: "licenseName"
}
//Project license url
{
    type: "input",
    message: "Include License URL (optional)"
    name: "licenseUrl"
}
//Project issue page url
{
    type: "input",
    message: "Include project's issue page url. (optional)"
    name: "issue"
}
//Project install commands or instructions
{
    type: "input",
    message: "Type in any instructions (optional)"
    name: "install"
}
//Project test command
{
    type: "input",
    message: "Type in test command (optional)"
    name: "test"
}

];


// TODO: Create a function to write README file
//readme was created
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err)=> {
        if (err) {
        throw err;
    }
        console.log("Read me was created")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generatedMarkdown(answers);
        console.log(answers);
        writeToFile("ReadMe.md", response);
    })
}

// Function call to initialize app
init();
