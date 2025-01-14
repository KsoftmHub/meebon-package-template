import { existsSync, readFileSync, rmSync } from "node:fs";
import { execSync } from 'child_process'
import picocolors from 'picocolors';
import path from 'path'
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
    console.log(picocolors.redBright(`Folder: ${picocolors.italic(path.normalize(folder))} is deleted!`));
  }
})

execSync("pnpm run refresh", { stdio: "inherit" })