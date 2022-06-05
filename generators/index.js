const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pageGenerator = require('./pageGenerator');
const partialGenerator = require('./partialGenerator');

module.exports = (plop) => {
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('partial', partialGenerator);
};
