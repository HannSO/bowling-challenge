function Frame() {
  this.pinsKnocked = [0,0]
  console.log(this.pinsKnocked)
  this.MAXPINS = 10
  this.status = null

}

Frame.prototype.addFirstRoll = function(pinsKnocked){
  this.pinsKnocked[0] = pinsKnocked;
  this.changeStatus();
  console.log(this.pinsKnocked);
};

Frame.prototype.addSecondRoll = function(pinsKnocked){
  this.pinsKnocked[1] = pinsKnocked;
  this.changeStatus();
  console.log(this.pinsKnocked);
};

Frame.prototype.changeStatus = function(){
  if (this.pinsKnocked[0]=== this.MAXPINS) {
    this.status = 'strike';
  } else if (this.pinsKnocked[0] + this.pinsKnocked[1] === this.MAXPINS) {
    this.status = 'spare';
  } else {
    this.status = 'normal';
  }

}

Frame.prototype.addBonusPins = function(pins){
  this.pinsKnocked.push(pins)
}
