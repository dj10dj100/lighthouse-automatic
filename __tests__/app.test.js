const Application = require("../src/app");

describe("Application ", () => {
  it("Starts", () => {
    expect(Application.start).toBeDefined();
    expect(Application.start()).toBeUndefined();
  });
});
