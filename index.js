  //required files
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");

//prompts for the user before the team profile is created
      inquirer
        .prompt([
          {
            name: "name",
            type: "input",
            message: "What is their name?",
          },
          {
            name: "id",
            type: "input",
            message: "What is their ID number?",
          },
          {
            name: "emailAddress",
            type: "input",
            message: "Email Address: ",
            validate: function (input) {
              const valid = input.includes("@");
              return valid || "Please enter a valid email";
            },
          },
          {
            name: "addNewEmployee",
            type: "dropdown",
            message: "Would you like to add another team member?",
            choices: [
              "Engineer",
              "Intern",
              "I don't want to add another team member",
            ],
            chooseNewEmployee(choices);
          },
        ])

        function chooseNewEmployee() {
          let employeeType;
        
          switch (license) {
            case "Engineer":
              employeeType = "";
              break;
        
            case "Intern":
              employeeType = "";
              break;
        
            case "I don't want to add another team member.":
              employeeType = "";
              break;

          }
        
        //answer to promise - what to do with the answers user provides
        .then((answers) => {
          const teamBuilder = generateTeamBuilder(answers);
          fs.writeFile("index.html", teamBuilder, process.argv[2], (err) =>
            err
              ? console.error(err)
              : console.log("You have created your team.")
          );
        });
      

//function call to insert prompt answers into the html
      const generateTeamBuilder = (
        { name, id, emailAddress },
        engineerPrompt,
        internPrompt
      ) => {
        return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@700&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <h1>My Team</h1>
    
        <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">${employeeType}</div>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${id}</p>
                <p class="card-text">${emailAddress}</p>
            </div>
        </div>
    
    </body>
    
    </html>`;
      };
    }
