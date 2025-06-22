const fs = require('fs');
const path = require('path');

const env = process.env.NODE_ENV || 'default';
const configPath = path.join(__dirname, `${env}.json`);

let config = {};
if (fs.existsSync(configPath)) {
  config = require(configPath);
} else {
  config = require('./default.json');
}

module.exports = config;