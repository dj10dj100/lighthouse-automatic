const cmd = require('node-cmd');
const chalk = require('chalk');
const fs = require('fs-extra');
const config = require('../src/configs');
const path = require('path');
const cwd = require('cwd');
const location = cwd();
const log = console.log;

const Open = async properties => {
    const reportLocation = `${path.join(
        path.resolve(location)
    )}/lighthouse-reports`;

    await fs.ensureDir(reportLocation);
    const testName = `${Date.now()}-${properties.pageName}`;
    await log(chalk.green(`Opening: ${chalk.blue(properties.url)}`));
    return await cmd.get(
        `lighthouse ${properties.url} ${
            config.output === 'html'
                ? `--output-path=${reportLocation}/${testName}.html`
                : '--output=json'
        } --chrome-flags="--headless"`,
        (err, data, stderr) => {
            if (config.log) {
                if (err) {
                    log(chalk.red(err));
                }
                log(chalk.green(stderr));
            }
            if (config.output === 'json') {
                const fileName = path.resolve(
                    reportLocation,
                    `${testName}.json`
                );
                fs.writeJsonSync(fileName, data);
                log(
                    chalk.green(
                        `Completed: ${chalk.white(testName)}.report.json`
                    )
                );
            } else {
                log(chalk.green(`Completed: ${chalk.white(testName)}`));
            }
        }
    );
};

module.exports = Open;
