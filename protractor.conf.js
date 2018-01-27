// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  directConnect: true,
  allScriptsTimeout: 11000,
  specs: ["./e2e/**/*.e2e-spec.ts"],
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
    loggingPrefs: {
      driver: "INFO",
      server: "INFO",
      browser: "INFO"
    },

    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800,600"]
    }
  },
  // use this baseUrl if using selenium
  // baseUrl: "http://localhost:4200/",
  baseUrl: "http://localhost:49152/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require("ts-node").register({
      project: "e2e/tsconfig.e2e.json"
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
