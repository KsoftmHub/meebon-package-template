#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const projectName = process.argv[2] || "my-package";
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
    console.error(`Directory "${projectName}" already exists.`);
    process.exit(1);
}
fs.mkdirSync(projectPath);

const templatePath = path.join(__dirname);
fs.cpSync(templatePath, projectPath, { recursive: true });

console.log("Initializing pnpm...");
execSync('pnpm init -y', { cwd: projectPath, stdio: 'inherit' });

console.log(`Project "${projectName}" created successfully!`);
console.log(`Navigate to the project directory: cd ${projectName}`);
