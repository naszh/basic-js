const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  for (let file in names) {
    if (arr.indexOf(names[file]) > -1) {
      let index = 1;
      while (arr.indexOf(names[file] + '(' + index + ')') > -1) {
        index++;
      }
      let str = names[file] + '(' + index + ')';
      arr.push(str);
    } else {
      arr.push(names[file]);
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};
