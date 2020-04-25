// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.$inner = $('<i class="fas inner"></i>');
  this.top = top;
  this.left = left;
  this.element = this.$inner.get(0);
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.chessMoves = function() {
  var pixPerMove = 30;
  var move = this.moves[Math.floor(Math.random() * this.moves.length)];
  var newTop = this.top + move[0];
  var newLeft = this.left + move[1];
  if (newLeft >= 0 && newLeft <= 15 && newTop >= 0 && newTop <= 15) {
    this.top = newTop;
    this.left = newLeft;
  }
  this.setPosition(this.top * pixPerMove, this.left * pixPerMove);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$inner.css(styleSettings);
};

Dancer.prototype.animate = function(animationName) {
  this.element.classList.remove(animationName);
  void this.element.offsetWidth;
  this.element.classList.add(animationName);
};



