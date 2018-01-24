const chalk = require("chalk");

module.exports = pjson => {
  let config = pjson["lighthouse-automatic"];

  if (!config) {
    throw new Error(
      "Package.json Config requires lighthouse-automatic options"
    );
  }

  if (!config.urls) {
    throw new Error("Lighthouse-automatic config requires URLS object");
  }

  if (!config.runOnce && !config.minutes) {
    throw new Error(
      "Lighthouse expects minutes configuration when not in 'runOnce' mode"
    );
  }

  config.version = pjson.version;
  return config;
};
