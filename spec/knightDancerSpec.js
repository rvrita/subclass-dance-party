describe('knightDancer', function() {

  var knightDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    knightDancer = new KnightDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(knightDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(knightDancer.$inner, 'animate');
    knightDancer.step();
    expect(knightDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(knightDancer, 'step');
      expect(knightDancer.step.callCount).to.be.equal(0);
      knightDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(knightDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(knightDancer.step.callCount).to.be.equal(2);
    });
  });
});
