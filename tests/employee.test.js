const Employee = require("../lib/employee");

//Define what the test should be doing.
describe(`employee`, () => {
  it(`should create a new employee object when initialized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it(`should set name via the constructor`, () => {
    const employee = new Employee("Heather", 2, "heather@gmail.com");
    expect(employee.name).toBe("Heather");
    expect(employee.id).toBe(2);
    expect(employee.email).toBe("heather@gmail.com");
  });
});
