import { readFileSync, rmSync } from "node:fs";
import { buildSync } from "esbuild";
import pkg from "../package.json";
import { execSync } from "node:child_process";

// find the build directory
const tsc = JSON.parse(readFileSync("tsconfig.json").toString())
const buildDir = tsc?.compilerOptions?.outDir ?? "dist";

// remove the dist file
rmSync(buildDir, { force: true, recursive: true });

// build ts declaration (*.d.ts)
execSync("tsc --project tsconfig.json", { stdio: "inherit" });

// build files
buildSync({
  entryPoints: ["lib/index.ts"],
  outfile: `${buildDir}/index.js`,
  bundle: true,
  platform: "node",
  format: "esm",
  inject: ['types/global.d.ts'],
  tsconfig: "tsconfig.json",
  external: Object.keys(pkg.dependencies),
  resolveExtensions: [".ts", ".js", ".json", ".d.ts"],
});
