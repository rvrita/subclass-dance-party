var RookDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.element.classList.add('fa-chess-rook');
  this.moves = [[0, 2], [0, -2], [2, 0], [-2, 0], [0, 3], [0, -3], [3, 0], [-3, 0]];
};

RookDancer.prototype = Object.create(Dancer.prototype);
RookDancer.prototype.constructor = RookDancer;

RookDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

RookDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('squash');
};