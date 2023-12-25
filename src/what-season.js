const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined') return 'Unable to determine the time of year!';

  if (!(date instanceof Date) ||  Object.keys(date).length > 0) throw new TypeError('Invalid date!');

  const month = date.getMonth();

  const arrOfSeasons = ["winter", "spring", "summer", "autumn"];
  return arrOfSeasons[Math.floor(((month + 1) % 12) / 3)];
}

module.exports = {
  getSeason
};
