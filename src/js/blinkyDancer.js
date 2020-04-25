var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$inner.removeClass('fas');
  this.$inner.addClass('blinker');

  this.$node.append(this.$inner);
  // this.$inner.on('click', this.blink.bind(this));
  // this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/* BlinkyDancer.prototype.blink = function() {
  this.$inner.addClass('blinker');
  setTimeout(this.$inner.removeClass.bind(this.$inner, 'blinker'), 1000);
}; */