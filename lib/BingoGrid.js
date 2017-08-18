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


module.exports = BingoGrid;
