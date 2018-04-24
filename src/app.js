const config = require('../src/configs');
const chalk = require('chalk');
const Open = require('./open');
const Promise = require('promise');
const log = console.log;

const runAll = () =>
    config.urls.map(async url => {
        const user = await Open(url);
    });

const start = async () => {
    //run tests once
    if (config.runOnce) {
        log(chalk.green(`Tests running: ${chalk.blue('Once')}`));
        const results = await runAll();
    }

    //run all tests
    if (config.minutes && !config.runOnce) {
        log(
            chalk.green(`Setting up lighthouse to run every ${config.minutes}`)
        );
    }
};

module.exports = {
    runAll,
    start
};
