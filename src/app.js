const config = require("../src/configs")(require("../package.json"));
const chalk = require("chalk");
const Test = require("./lighthouse-test");
const log = console.log;

const runAllTests = () => config.urls.map(url => Test(url));

const start = () => {
  //run tests once
  if (config.runOnce) {
    log(chalk.green(`Tests running: ${chalk.blue("Once")}`));
    const results = runAllTests();
    log(results);
  }
  //run all tests
  if (config.minutes && !config.runOnce) {
    log(chalk.green(`Setting up lighthouse to run every ${config.minutes}`));
  }
};

module.exports = {
  runAllTests,
  start
};
