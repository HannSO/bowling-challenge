describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();

  });


  describe('constructor qualities', function(){
    it ('should start with empty set of logged goes', function(){
      expect(game.allFrames).toEqual([]);
    })
    it ('has a set number of turns, 10', function(){
      expect(game.NUMTURNS).toEqual(10);
    })

  });

  describe('#addFrames', function(){
    it ('adds frame to allFrames array', function(){
      game.addFrame([0,0]);
      expect(game.allFrames).toEqual([[0,0]]);
    })
    it ('throws an error if NUMTURNS has run out', function(){
      game.NUMTURNS = 1
      game.addFrame([0,0])
      expect(function(){game.addFrame([0,0]);}).toThrow("Turns have run out");
    })
  });

  describe('#turns', function(){
    it('records number of turns, 1 turn after 1 frame added', function(){
      game.addFrame([0,0]);
      expect(game.turns()).toEqual(1);
    })
    it('has turns set at 0, as array of Frames is 0', function(){
      expect(game.turns()).toEqual(0);
    })
  });


  describe('#isThereNextTurn', function(){
    it('true when the number of frames, is less than NUMTURNS', function(){
      game.addFrame();
      expect(game.isThereNextTurn()).toEqual(true);
    });
    it ('false when the number of frames is more than NUMTURNS', function(){
      game.NUMTURNS = 1;
      game.addFrame();
      expect(game.isThereNextTurn()).toEqual(false);
    })
  });




});
