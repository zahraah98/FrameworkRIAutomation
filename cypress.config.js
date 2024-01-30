const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  pageLoadTimeout: 30000,
  taskTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 20000,
  defaultCommandTimeout: 5000,
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,
  capture: 'fullPage',
  retries: {
    openMode: 0 // for 2 attempts
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,

  e2e: {
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        /* ... */
      })
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000/',
    "video": true,

   setupNodeEvents(on, config) {
     // implement node event listeners here

     require('cypress-mochawesome-reporter/plugin')(on);

   },

 },
 
});