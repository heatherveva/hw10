const Employee = require("./employee");

//child class - manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    //custom behavior
    this.officeNumber = officeNumber;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
