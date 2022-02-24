const Employee = require("./employee");

//child class - engineer
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

    this.gitHub = gitHub;
  }
}

let employeeTwo = new Engineer(
  "Alec",
  2,
  "alec@gmail.com",
  "alecisaprogrammer"
);

console.log(employeeTwo);

//getGithub();

module.exports = Engineer;
