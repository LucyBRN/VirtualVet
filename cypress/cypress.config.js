const { defineConfig } = require("cypress");

module.exports = {
  projectId: 'bna762',
  e2e: {
    //baseUrl: '',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.js',
  },
  env: {
    username: 'testUser',
    password: 'testPass',
  },

  video: true,
  videoCompression: 32,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  trashAssetsBeforeRuns: true,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  numTestsKeptInMemory: 5,
  videoUploadOnPasses: false,
  reporter: 'spec',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true,
  },
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  fixturesFolder: 'cypress/fixtures',
  downloadsFolder: 'cypress/downloads', 
  viewportWidth: 1280,
  viewportHeight: 720,
};
