const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "junit",
    reporterOptions: {
    mochaFile: "cypress/reports/junit/test-results-[hash].xml",
    toConsole : true,
    },
    specPattern: "cypress/e2e",
    baseUrl:"https://automationexercise.com/",
  },
  video:true,
});
