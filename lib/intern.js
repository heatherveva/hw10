const Employee = require("./employee");

//child class - intern
class Intern extends Employee {
  constructor(name, id, email, schoolName) {
    super(name, id, email);

    this.schoolName = schoolName;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
