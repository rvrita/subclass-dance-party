var PawnDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.element.classList.add('fa-chess-pawn');
  this.moves = [[0, 1], [0, -1]];
/*
  this.$inner.removeClass('fa-chess-knight');
  this.$inner.removeClass('flip');
  this.$inner.addClass('fa-chess-pawn');
  this.$inner.addClass('bounce'); */
  // this.setPosition(top, left);
};

PawnDancer.prototype = Object.create(Dancer.prototype);
PawnDancer.prototype.constructor = PawnDancer;

PawnDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

PawnDancer.prototype.chessMoves = function() {
  Dancer.prototype.chessMoves.call(this);
  this.animate('bounce');
};
