const appInit = require("./app");
const { logger } = require("#configs");

appInit({ logger });
console.log("Starting");
