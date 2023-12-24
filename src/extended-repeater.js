const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+', addition= '', additionRepeatTimes = 1, additionSeparator= '|'}) {
  let string = ''
  let subStr = ''

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    subStr += `${addition}${i < additionRepeatTimes - 1 ? additionSeparator : ''}`;
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    string += `${str}${subStr}${i < repeatTimes - 1 ? separator : ''}`;
  }

  return string
}

module.exports = {
  repeater
};
