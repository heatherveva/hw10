const Employee = require("./employee");

//child class - intern
class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);

    this.schoolName = schoolName;
  }
}

let employeeThree = new Intern("Matt", 3, "matt@gmail.com", "GWU");

console.log(employeeThree);

module.exports = Intern;
