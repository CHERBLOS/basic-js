const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArr = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = [];

    for (let j = 0; j < matrix[i].length; j += 1) {
      let mineCounter = 0;

      if (matrix[i][j]) {
        row.push(1);
        continue;
      } 

      if (i === 0 || i === matrix.length - 1) {
        if (matrix[i === 0 ? i + 1 : i - 1][j]) mineCounter += 1;
        if (matrix[i === 0 ? i + 1 : i - 1][j + 1]) mineCounter += 1;
        if (matrix[i === 0 ? i + 1 : i - 1][j - 1]) mineCounter += 1;


      } else {
        if (matrix[i - 1][j]) mineCounter += 1;
        if (matrix[i + 1][j]) mineCounter += 1;
      }

      if (matrix[i][j + 1]) mineCounter += 1;
      if (matrix[i][j - 1]) mineCounter += 1;

      row.push(mineCounter);
    }

    resultArr.push(row)
  }

  return resultArr;
}

module.exports = {
  minesweeper
};
