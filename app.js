const inquirer = require("inquirer");
const fs = require("fs");

let profile = new Promise(function (resolve, reject){
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "location",
            message: "Where are you located?"
        },
        {
            type: "input",
            name: "bio",
            message: "Type a short biography here:"
        },
        {
            type: "input",
            name: "LinkedInURL",
            message: "What is your LinkedIn URL?"
        },
        {
            type: "input",
            name: "GithubURL",
            message: "What is your Github URL?"
        },
        {
            type: "input",
            name: "strengths",
            message: "What are your coding strengths?"
        }
        
    ]));
});

profile.then(function (data){
    
})