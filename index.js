//required files
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require("fs");
const inquirer = require("inquirer");

//variable to push all employees into
const employees = [];

//prompts for the user before the team profile is created
function createEmployee() {
  inquirer
    .prompt([
      {
        name: "addNewEmployee",
        type: "list",
        message: "Would you like to add another team member?",
        choices: ["Manager", "Engineer", "Intern", "No"],
      },
      {
        name: "name",
        type: "input",
        when: (answers) => answers.addNewEmployee !== "No",
        message: "What is their name?",
      },
      {
        name: "id",
        type: "input",
        when: (answers) => answers.addNewEmployee !== "No",
        message: "What is their ID number?",
      },
      {
        name: "email",
        type: "input",
        when: (answers) => answers.addNewEmployee !== "No",
        message: "Email Address: ",
        validate: function (input) {
          const valid = input.includes("@");
          return valid || "Please enter a valid email";
        },
      },
      {
        name: "officeNumber",
        type: "input",
        when: (answers) => answers.addNewEmployee === "Manager",
        message: "What is their office number?",
      },
      {
        name: "gitHub",
        type: "input",
        when: (answers) => answers.addNewEmployee === "Engineer",
        message: "What is their GitHub link?",
      },
      {
        name: "school",
        type: "input",
        when: (answers) => answers.addNewEmployee === "Intern",
        message: "What is school did they attend?",
      },
    ])

    .then((answers) => {
      if (answers.addNewEmployee === "Manager") {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        employees.push(manager);
        console.log(manager);
        createEmployee();
      } else if (answers.addNewEmployee === "Engineer") {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employees.push(engineer);
        createEmployee();
      } else if (answers.addNewEmployee === "Intern") {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
        createEmployee();
      } else {
        const teamBuilder = generateTeamBuilder();
        console.log(teamBuilder);
        fs.writeFile("index.html", teamBuilder, (err) =>
          err ? console.error(err) : console.log("You have created your team.")
        );
      }
    });
}
function generateSpecial(employee) {
  if (employee.getRole() === "Manager") {
    return `<p class="card-text">Office Number: ${employee.officeNumber}</p>`;
  } else if (employee.getRole() === "Engineer") {
    return `<p class="card-text">GitHub Link: ${employee.gitHub}</p>`;
  } else {
    return `<p class="card-text">School: ${employee.schoolName}</p>`;
  }
}

function generateCard() {
  let cardHtml = "";
  employees.forEach((employee) => {
    cardHtml += `<div class="container card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header col fs-3 text-center">${employee.getRole()}</div>
  <div class="card-body row">
      <p class="card-title">Name: ${employee.name}</p>
      <p class="card-text">ID: ${employee.id}</p>
      <p class="card-text">Email: ${employee.email}</p>
      ${generateSpecial(employee)}
      
  </div>
</div>
`;
  });
  return cardHtml;
}

//function call to insert prompt answers into the html
const generateTeamBuilder = () => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
        <title>Team Profiles</title>
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@700&display=swap" rel="stylesheet">
    </head>
    
    <body>
        <h1>My Team</h1>
    
     ${generateCard()}
    </body>
    
    </html>`;
};

createEmployee();
