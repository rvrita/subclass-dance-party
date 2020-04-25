var KingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.element.classList.add('fa-chess-king');
  this.moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
};

KingDancer.prototype = Object.create(Dancer.prototype);
KingDancer.prototype.constructor = KingDancer;

KingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

KingDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('flip');
};