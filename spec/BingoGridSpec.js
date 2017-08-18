describe('BingoGrid', function() {
  var BingoGrid = require('../lib/BingoGrid');

  describe('#new', function() {
    it('should initialize itself with rows and cols', function() {
      var grid = new BingoGrid(2, 3);
      expect(grid instanceof BingoGrid).toBeTruthy();
      expect(grid.rows).toEqual(2);
      expect(grid.cols).toEqual(3);
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
  });

  describe('#random', function () {
    it('throw an exception if you need more words', function() {
      var grid = new BingoGrid(2,1);
      var badRandomCall = function() {
        grid.random(['oneWord']);
      };

      expect(badRandomCall).toThrow(new Error('need more words'));
    });
  });
});
