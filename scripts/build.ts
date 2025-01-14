import { copyFileSync, cp, cpSync, rmSync } from "node:fs";
import { buildSync } from "esbuild";
import pkg from "../package.json";
import { execSync } from "node:child_process";

rmSync("dist", { force: true, recursive: true });

execSync("tsc --project tsconfig.json", { stdio: "inherit" });


buildSync({
  entryPoints: ["lib/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",
  format: "esm",
  inject: ['types/global.d.ts'],
  tsconfig: "tsconfig.json",
  external: Object.keys(pkg.dependencies),
  resolveExtensions: [".ts", ".js", ".json", ".d.ts"],
});

// cpSync("types", "dist/types", { recursive: true });

/*

buildSync({
  entryPoints: ["lib/index.ts"],
  outdir: "dist",
  bundle: true,
  platform: "node",
  format: "esm",
  external: Object.keys(pkg.dependencies),
  resolveExtensions: [".ts", ".js", ".json"]
});


*/
