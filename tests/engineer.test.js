const Engineer = require("../lib/engineer");

describe(`engineer`, () => {
  it(`should create a new employee object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it(`should set name via the constructor`, () => {
    const engineer = new Engineer(
      "Heather",
      2,
      "heather@gmail.com",
      "https://github.com/heatherveva"
    );
    expect(engineer.name).toBe("Heather");
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe("heather@gmail.com");
    expect(engineer.gitHub).toBe("https://github.com/heatherveva");
  });
});
