const Intern = require("../lib/intern");

describe(`intern`, () => {
  it(`should create a new employee object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it(`should set name via the constructor`, () => {
    const intern = new Intern("Heather", 2, "heather@gmail.com", "GWU");
    expect(intern.name).toBe("Heather");
    expect(intern.id).toBe(2);
    expect(intern.email).toBe("heather@gmail.com");
    expect(intern.schoolName).toBe("GWU");
  });
});

it(`should indicate the employee type is intern`, () => {
  const employee = new Intern("Heather", 2, "heather@gmail.com", "GWU");
  expect(employee.getRole()).toBe("Intern");
});
