describe('pawnDancer', function() {

  var pawnDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pawnDancer = new PawnDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pawnDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(pawnDancer.$inner, 'animate');
    pawnDancer.step();
    expect(pawnDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pawnDancer, 'step');
      expect(pawnDancer.step.callCount).to.be.equal(0);
      pawnDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(pawnDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(pawnDancer.step.callCount).to.be.equal(2);
    });
  });
});
