var KnightDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$inner.addClass('fa-chess-knight');
  this.moves = [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];
  // this.$inner.addClass('flip');
  // this.element.classList.add('fa-chess-knight');
};

KnightDancer.prototype = Object.create(Dancer.prototype);
KnightDancer.prototype.constructor = KnightDancer;

KnightDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

KnightDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('shake');
};