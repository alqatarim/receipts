// checkModules.js
import { readFileSync } from 'fs';
import { join } from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Path to package.json
//const packagePath = join(__dirname, 'package.json');
const packagePath = join(__dirname, 'package.json');

// Read package.json and parse it
const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
const dependencies = Object.keys(packageJson.dependencies || {}).concat(Object.keys(packageJson.devDependencies || {}));

// Attempt to require each module
const missingModules = dependencies.filter(dep => {
  try {
    require.resolve(dep);
    return false; // Module is found
  } catch (err) {
    return true; // Module is missing
  }
});

if (missingModules.length) {
  console.log('Missing modules:', missingModules.join(', '));
} else {
  console.log('All modules are installed.');
}
