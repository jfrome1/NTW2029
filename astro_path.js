import fs from 'fs';
import path from 'path';

// Paths
const source = path.join('dist', '_astro');
const destination = path.join('dist', 'ntw2029', '_astro');

// Ensure the destination directory exists
fs.mkdirSync(destination, { recursive: true });

// Copy files from source to destination
function copyFolderSync(from, to) {
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      fs.mkdirSync(toPath, { recursive: true });
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Copy the contents of the _astro folder
copyFolderSync(source, destination);

// Remove the original _astro folder after copying
fs.rmSync(source, { recursive: true, force: true });

console.log('Build create successfully!.');
