import fs from 'fs';
import path from 'path';

export {
  executeShellCommand,
  getParsedJsonFromFile,
  getParsedPackageJsonFromPath,
  isArray,
  isFunction,
  isString
}

/**
 * Executes the command passed to it at the path requested
 * using the instance of shelljs passed in
 */
function executeShellCommand(sh, path, installCommand) {
  sh.cd(path);
  sh.exec(installCommand); 
}

/**
 * Gets the parsed contents of a json file
 */
function getParsedJsonFromFile(filePath, fileName, encoding = 'utf8') {
  try {
    var packageJsonContents = fs.readFileSync(path.join(filePath, fileName), encoding);
    return JSON.parse(packageJsonContents);
  } catch (e) {
    console.error(e);
  }
}

/**
 * A helper method for getting the contents of package.json at a given path
 */
function getParsedPackageJsonFromPath(path) {
  return getParsedJsonFromFile(path, 'package.json');
}

/**
 * Test if the passed argument is an array
 */
function isArray(arr) {
  return arr.constructor === Array;
}

/**
 * Test if the passed argument is a function 
 */
function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Test if the passed argument is a string
 */
function isString(str) {
  return Object.prototype.toString.call(str) == '[object String]';
}

