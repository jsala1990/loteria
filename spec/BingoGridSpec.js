describe('BingoGrid', function() {
  var BingoGrid = require('../lib/BingoGrid');
  var grid;

  it('should initialize itself with rows and cols', function() {
    grid = new BingoGrid(1, 1);
    expect(grid instanceof BingoGrid).toBeTruthy();
    expect(grid.rows).toEqual(1);
  });

  it('should throw an error for invalid columns', function() {
    var badBingoInit = function() {
      new BingoGrid(0, 1);
    }

    expect(badBingoInit).toThrow(new Error('Rows must be positive integer'));
  });

  it('should throw an error for invalid rows', function() {
    var badBingoInit = function() {
      new BingoGrid(1, 0);
    }

    expect(badBingoInit).toThrow(new Error('Cols must be positive integer'));
  });

  it('should initialize itself with rows and cols', function() {
    grid = new BingoGrid(1, 1);
  });

});
