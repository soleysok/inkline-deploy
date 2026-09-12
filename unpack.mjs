import { execSync } from "node:child_process";
import { existsSync } from "node:fs";

if (!existsSync("src.tgz") && !existsSync("src.tar.gz")) {
  throw new Error("src.tgz missing");
}
const archive = existsSync("src.tar.gz") ? "src.tar.gz" : "src.tgz";
if (!existsSync("src/routes") && !existsSync("src/router.tsx")) {
  execSync(`tar -xzf ${archive}`, { stdio: "inherit" });
}
