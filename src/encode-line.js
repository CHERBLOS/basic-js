const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    let sum = 1;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        sum += 1
      } else break;
    }
    newArr.push(`${sum > 1 ? sum : ''}${arr[i]}`);
    i += sum - 1;
  }

  return newArr.join('');
}

module.exports = {
  encodeLine
};
