describe('rookDancer', function() {

  var rookDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rookDancer = new RookDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rookDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(rookDancer.$inner, 'animate');
    rookDancer.step();
    expect(rookDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rookDancer, 'step');
      expect(rookDancer.step.callCount).to.be.equal(0);
      rookDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(rookDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(rookDancer.step.callCount).to.be.equal(2);
    });
  });
});
