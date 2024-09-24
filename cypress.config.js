const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //specPattern: 'cypress/e2e/**/*.js',   //estos dos lo omitimos, que ya antes funcionanaba sin tocar eso
    //baseUrl: 'http://localhost:3000',
    
    //video: true,                              //Se jode la marrana (another day)
    //screenshotsFolder: 'cypress/screenshots',
    //videosFolder: 'cypress/videos'
  },
});
