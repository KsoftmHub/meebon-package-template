#!/usr/bin/env node

import { mkdirSync, writeFileSync } from 'fs';
const projectName = process.argv[2] || "my-package";

mkdirSync(projectName);
writeFileSync(`${projectName}/index.js`, "// Your project starts here");

console.log(`Project '${projectName}' created successfully!`);
