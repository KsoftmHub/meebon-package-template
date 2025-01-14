import { existsSync, rmSync } from "node:fs";
import { execSync } from 'child_process'

const foldersToClean = [
    'dist',
    'coverage',


    // package-manager lock files
    'pnpm-lock.yaml',
    'package-lock.json',
    'yarn.lock',
]

foldersToClean.forEach(folder => {
    if (existsSync(folder)) {
        rmSync(folder, { force: true, recursive: true });
        console.log('Folder: %s is deleted!', folder);
    }
})

execSync("pnpm run ci", { stdio: "inherit" })