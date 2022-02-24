const Employee = require("./employee");

//child class - manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    //custom behavior
    this.officeNumber = officeNumber;
  }
}

let employeeOne = new Manager("Jane", 1, "jane@gmail.com", 44);

console.log(employeeOne);

module.exports = Manager;
