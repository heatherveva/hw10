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

it(`should return employee when the method is called`),
  () => {
    const employee = new Employee("Heather", 2, "heather@gmail.com");
    expect(employee.getRole()).toBe("employee");
  };

it(`should return employee when the method is called`),
  () => {
    const employee = new Employee("Heather", 2, "heather@gmail.com");
    expect(employee.getName()).toBe("Heather");
  };

it(`should return employee when the method is called`),
  () => {
    const employee = new Employee("Heather", 2, "heather@gmail.com");
    expect(employee.getEmail()).toBe("heather@gmail.com");
  };

it(`should return employee when the method is called`),
  () => {
    const employee = new Employee("Heather", 2, "heather@gmail.com");
    expect(employee.getId()).toBe(2);
  };
