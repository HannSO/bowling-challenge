'use strict';

describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();

  });


  describe('constructor qualities', function(){
    it ('has a first initial pinsKnocked of 0 for both rolls', function(){
      expect(frame.pinsKnocked).toEqual([0,0]);
    })

    it ('has a maximum number of pins of 10', function(){
      expect(frame.MAXPINS).toEqual(10)
    })

  });

  describe('#addFirstRoll', function(){
    it('inputs first roll score into frame.pinsKnocked array', function(){
      frame.addFirstRoll(3);
      expect(frame.pinsKnocked[0]).toEqual(3);
    })
  })

  describe ('#addSecondRoll', function(){
    it ('inputs second roll score into frame.pinsKnocked array', function(){
      frame.addSecondRoll(2);
      expect(frame.pinsKnocked[1]).toEqual(2);
    })

  describe ('#frameStatus', function(){
    it ('returns strike when the first roll is equal to max pins', function(){
      frame.addFirstRoll(frame.MAXPINS)
      expect(frame.status).toEqual('strike')
    })
    it ('returns spare when both rolls add to ten', function(){
      frame.addFirstRoll(frame.MAXPINS/2)
      frame.addSecondRoll(frame.MAXPINS/2)
      expect(frame.status).toEqual('spare')
    })
  })

  })

});
