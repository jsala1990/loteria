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
        new BingoGrid(1, 2);
      }

      expect(badBingoInit).toThrow(new Error('Rows must be greater than 1'));
    });

    it('should throw an error for invalid rows', function() {
      var badBingoInit = function() {
        new BingoGrid(2, 1);
      }

      expect(badBingoInit).toThrow(new Error('Cols must be greater than 1'));
    });
  });

  describe('#random', function () {
    it('throws an exception if you need more words', function() {
      var grid = new BingoGrid(2,1);
      var badRandomCall = function() {
        grid.random(['oneWord']);
      };

      expect(badRandomCall).toThrow(new Error('need more words'));
    });

    it('returns 1x1 array', function() {
      var grid = new BingoGrid(1,1);
      var listOfWords = ['word1'];

      expect(grid.random(listOfWords)).toEqual(['word1']);
    });

    it('returns 2x2 array', function() {
      var grid = new BingoGrid(2,1);
      var listOfWords = ['word1', 'word2'];

      var randomGrid = grid.random(listOfWords);

      var numberOfColumns = randomGrid.length
      var numberOfRows = randomGrid[0].length

      expect(numberOfColumns).toEqual(2);
      expect(numberOfRows).toEqual(1);
    });
  });
});
