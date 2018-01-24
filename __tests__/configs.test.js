const mockPackage = {
  "lighthouse-automatic": {
    urls: {},
    runOnce: true
  }
};
describe("Package.json / Configuration", () => {
  it("Loads package.json", () => {
    const config = require("../src/configs")(mockPackage);
    expect(require("../src/configs")).toBeDefined();
    expect(config).toBeDefined();
  });

  it("Loads lighthouse config from package.json", () => {
    expect(() =>
      require("../src/configs")({
        urls: {}
      })
    ).toThrow();
  });

  it("Expects config to contain URLs object", () => {
    expect(() =>
      require("../src/configs")({
        "lighthouse-automatic": {
          runOnce: true
        }
      })
    ).toThrow();
  });

  it("Expects lighthouse to exit when minutes are not specified when run more than once is defined", () => {
    expect(() =>
      require("../src/configs")({
        "lighthouse-automatic": {
          runOnce: false
        }
      })
    ).toThrow();
  });
});
