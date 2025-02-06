import { promises as fsPromises } from "fs";
import path from "path";
import { checkFile } from "./checkNutshellLinks.js"; // Import the function

async function processDirectory(dirPath) {
  try {
    const entries = await fsPromises.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath); 
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        console.log(`Checking: ${fullPath}`);
        await checkFile(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error processing directory ${dirPath}: ${err.message}`);
  }
}

async function main() {
  const rootDir = process.argv[2]; 

  if (!rootDir) {
    console.error("No root directory provided.");
    process.exit(1);
  }

  await processDirectory(rootDir);
}

main();
