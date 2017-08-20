function BingoGrid(rows, cols) {
  if (rows <= 1) {
    throw new Error('Rows must be positive integer');
  }

  if (cols <= 1) {
    throw new Error('Cols must be positive integer');
  }

  this.rows = rows;
  this.cols = cols;
}

BingoGrid.prototype.random = function(arrayOfWords) {

  if (this.rows * this.cols > arrayOfWords.length) {
    throw new Error('need more words');
  }

  return arrayOfWords;
};


module.exports = BingoGrid;
