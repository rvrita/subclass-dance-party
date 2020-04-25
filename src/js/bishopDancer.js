var BishopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.element.classList.add('fa-chess-bishop');
  this.moves = [[2, 2], [2, -2], [-2, 2], [-2, -2]];
};

BishopDancer.prototype = Object.create(Dancer.prototype);
BishopDancer.prototype.constructor = BishopDancer;

BishopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

BishopDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('rotate');
};