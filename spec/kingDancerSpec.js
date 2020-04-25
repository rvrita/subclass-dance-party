describe('kingDancer', function() {

  var kingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    kingDancer = new KingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(kingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(kingDancer.$inner, 'animate');
    kingDancer.step();
    expect(kingDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(kingDancer, 'step');
      expect(kingDancer.step.callCount).to.be.equal(0);
      kingDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(kingDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(kingDancer.step.callCount).to.be.equal(2);
    });
  });
});
