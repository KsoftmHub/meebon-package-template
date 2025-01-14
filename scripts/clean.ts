import { existsSync, readFileSync, rmSync } from "node:fs";
import { execSync } from 'child_process'

// find the build directory
const tsc = JSON.parse(readFileSync("tsconfig.json").toString())
const buildDir = tsc?.compilerOptions?.outDir ?? "dist";

const foldersToClean = [
    buildDir,
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

execSync("pnpm run refresh", { stdio: "inherit" })