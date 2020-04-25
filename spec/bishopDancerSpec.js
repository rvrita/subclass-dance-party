describe('bishopDancer', function() {

  var bishopDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bishopDancer = new BishopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bishopDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(bishopDancer.$inner, 'animate');
    bishopDancer.step();
    expect(bishopDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bishopDancer, 'step');
      expect(bishopDancer.step.callCount).to.be.equal(0);
      bishopDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(bishopDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(bishopDancer.step.callCount).to.be.equal(2);
    });
  });
});
