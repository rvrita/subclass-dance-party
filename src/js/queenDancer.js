var QueenDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.element.classList.add('fa-chess-queen');
  this.moves = [[2, 2], [2, -2], [-2, 2], [-2, -2], [-2, 0], [0, 2], [0, -2], [2, 0]];
};

QueenDancer.prototype = Object.create(Dancer.prototype);
QueenDancer.prototype.constructor = QueenDancer;

QueenDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

QueenDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('glow');
};