function BingoGrid(rows, cols) {
  if (rows <= 0) {
    throw new Error('Rows must be positive integer');
  }

  if (cols <= 0) {
    throw new Error('Cols must be positive integer');
  }

  this.rows = rows;
  this.cols = cols;
}

BingoGrid.prototype.random = function(arrayOfWords) {

  if (this.rows * this.cols > arrayOfWords.length) {
    throw new Error('need more words');
  }
};


module.exports = BingoGrid;
