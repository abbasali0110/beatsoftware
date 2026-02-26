import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const backendRoot = path.resolve(scriptDir, "..");
const frontendDist = path.resolve(backendRoot, "..", "beat-frontend", "dist");
const backendDist = path.resolve(backendRoot, "dist");
const targetDir = path.resolve(backendDist, "public");

const ensureFrontendBuildExists = async () => {
  try {
    const info = await stat(frontendDist);
    if (!info.isDirectory()) {
      throw new Error(`Frontend dist is not a directory: ${frontendDist}`);
    }
  } catch {
    throw new Error(
      `Frontend build output not found at ${frontendDist}. Run frontend build first.`,
    );
  }
};

const main = async () => {
  await ensureFrontendBuildExists();
  await mkdir(backendDist, { recursive: true });
  await rm(targetDir, { recursive: true, force: true });
  await cp(frontendDist, targetDir, { recursive: true });
  console.log(`Frontend copied to ${targetDir}`);
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
