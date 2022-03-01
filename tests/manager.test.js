const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe(`manager`, () => {
  it(`should create a new employee object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it(`should set name via the constructor`, () => {
    const manager = new Manager("Heather", 2, "heather@gmail.com", 4);
    expect(manager.name).toBe("Heather");
    expect(manager.id).toBe(2);
    expect(manager.email).toBe("heather@gmail.com");
    expect(manager.officeNumber).toBe(4);
  });
});

it(`should indicate the employee type is manager`, () => {
  const employee = new Manager("Heather", 2, "heather@gmail.com", 4);
  expect(employee.getRole()).toBe("Manager");
});
