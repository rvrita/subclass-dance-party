var FlashDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 250;
  this.colors = ['red', 'blue', 'green', 'yellow', 'orange'];
  this.colorState = 0;
  this.$inner.removeClass('blinker');
  this.$inner.addClass('flash');
  this.$inner.addClass(this.colors[this.colorState]);
  this.isLarge = false;
  this.initial = 0;
  this.max = 5;
  /*
  this.$inner.on('mouseover', (function() {
    this.$inner.css({'border': '8px solid rgb(134, 8, 198)'});
  })); */
  this.$inner.on('mouseover', this.confetti.bind(this));
  this.$inner.on('mouseover', this.enlarge.bind(this));
  this.$inner.on('mouseout', this.shrink.bind(this));
  this.step();
};

FlashDancer.prototype = Object.create(BlinkyDancer.prototype);
FlashDancer.prototype.constructor = FlashDancer;

FlashDancer.prototype.step = function() {
  BlinkyDancer.prototype.step.call(this);
  this.repeat();
};

FlashDancer.prototype.enlarge = function() {
  this.isLarge = true;
  this.scale();
};

FlashDancer.prototype.shrink = function() {
  this.isLarge = false;
  this.$inner.css({'transform': 'scale(1.0)'});
  this.initial = 0;
};

FlashDancer.prototype.repeat = function() {
  this.$inner.removeClass(this.colors[this.colorState]);
  if (this.colorState + 1 > this.colors.length - 1) {
    this.colorState = 0;
  } else {
    this.colorState++;
  }
  this.$inner.addClass(this.colors[this.colorState]);
};

FlashDancer.prototype.scale = function() {
  if (this.isLarge) {
    this.initial = Math.min(this.initial + 1, this.max);
    this.$inner.css({ 'transform': `scale(${this.initial})` });
    setTimeout(this.scale.bind(this), 1000);
  }
};

FlashDancer.prototype.confetti = function() {
  this.$inner.removeClass(this.colors[this.colorState]);
  this.$inner.addClass('confetti');
  this.$inner.confettiButton({
    hoverOnly: true
  });
  setTimeout(this.$inner.removeClass.bind(this.$inner, 'confetti'), 1000);
};