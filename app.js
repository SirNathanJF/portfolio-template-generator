const inquirer = require("inquirer");
const fs = require("fs");
const { clear } = require("console");

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
            message: "What is your LinkedIn URL? Please copy/paste or include https://"
        },
        {
            type: "input",
            name: "GithubURL",
            message: "What is your Github URL? Please copy/paste or include https://"
        },
        {
            type: "checkbox",
            name: "languages",
            message: "What coding languages do you know?",
            choices: ["JavaScript", "HTML", "CSS", "Python", "C++", "Java", "Ruby", "SQL", "PHP", "Swedish"]
        },
        {
            type: "input",
            name: "strengths",
            message: "What are your coding strengths?"
        }
        
    ]));
});

profile.then(function (data){
    let languages = data.languages.join(", ")
    let htmlFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>${data.name}'s Portfolio</title>
    </head>
    <body>
        <header class="header">
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="${data.LinkedInURL}" target="_blank">LinkedIn</a>
                <a href="${data.GithubURL}" target="_blank">GitHub</a>
            </div>
        </header>
            <h1>${data.name}</h1>
            <section id="bio">
                <h2>Bio:</h2>
                <p>${data.bio}</p>
            </section>
            <section id="strengths">
                <h2>Coding Strengths</h2>
                <p>${data.strengths}<p>
            </section>
            <section id="languages">
                <h2>Languages</h2>
                <p>${languages}</p>
            </section>
        <script src="./app.js"></script>
    </body>
    </html>
    `;

    fs.writeFile('user.html', htmlFile, (err) => {
        err ? console.error(err) : console.log("Success!");
    })
 })
