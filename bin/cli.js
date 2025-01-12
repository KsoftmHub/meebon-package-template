#!/usr/bin/env node

const fs = require('fs');
const projectName = process.argv[2] || "my-app";

fs.mkdirSync(projectName);
fs.writeFileSync(`${projectName}/index.js`, "// Your project starts here");

console.log(`Project '${projectName}' created successfully!`);
