function Game (){
  this.allFrames =[];
  this.NUMTURNS = 10
}

Game.prototype.isThereNextTurn = function(){
  if (this.turns() < this.NUMTURNS) {
    return true;
  } else if (this.turns() >= this.NUMTURNS) {
    return false;
  }
}

Game.prototype.addFrame = function(frame){
  if (this.isThereNextTurn() === false) {
    throw "Turns have run out"
  } else {
  this.allFrames.push(frame);
  }
}

Game.prototype.turns = function(){
  return this.allFrames.length
}

Game.prototype.addBonus = function(){
  
}
