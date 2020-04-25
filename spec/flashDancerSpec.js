describe('flashDancer', function() {

  var flashDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flashDancer = new FlashDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flashDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node toggle', function() {
    sinon.spy(flashDancer.$node, 'toggle');
    flashDancer.step();
    expect(flashDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flashDancer, 'step');
      expect(flashDancer.step.callCount).to.be.equal(0);
      flashDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(flashDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      flashDancer.step();
      expect(flashDancer.step.callCount).to.be.equal(2);
    });
  });
});
