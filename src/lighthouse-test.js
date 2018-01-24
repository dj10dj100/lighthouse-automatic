const cmd = require("node-cmd");
const chalk = require("chalk");
const fs = require("fs-extra");
const config = require("../src/configs")(require("../package.json"));
const path = require("path");
const log = console.log;

const Test = properties => {
  const testName = `${properties.pageName}-${Date.now()}`;
  log(chalk.green(`Opening: ${chalk.blue(properties.url)}`));
  fs.emptyDir("reports");
  fs.ensureDir("reports");
  try {
    cmd.get(
      `lighthouse ${
        properties.url
      } --output=json --output-path=./reports/${testName}.json --chrome-flags="--headless" `,
      (err, data, stderr) => {
        if (config.log) {
          if (err) {
            log(chalk.red(err));
          }
          log(chalk.green(stderr));
        }
        log(
          `Success! Report for ${testName} output: ${chalk.white(
            testName
          )}.json`
        );
      }
    );
  } catch (e) {
    return {
      test: testName,
      status: error,
      error: e
    };
  }

  return {
    test: testName,
    status: "success"
  };
};

module.exports = Test;
//   function(err, data, stderr) {
//     if (config.log) {
//       if (err) {
//         console.log(chalk.red(err));
//       }
//       console.log(chalk.green(stderr));
//     }
//     // const fileName = path.resolve("reports", `${testName}.json`);
//     // fs.writeJsonSync(fileName, data);
//     console.log(
//       `Success! Report for ${testName} output: ${chalk.white(testName)}.json`
//     );
//   }
// );
