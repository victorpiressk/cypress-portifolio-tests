const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://calculadora-aritmetica-vuejs-five.vercel.app/",
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
