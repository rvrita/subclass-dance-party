describe('queenDancer', function() {

  var queenDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    queenDancer = new QueenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(queenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a animate function that is not called', function() {
    sinon.spy(queenDancer.$inner, 'animate');
    queenDancer.step();
    expect(queenDancer.$inner.animate.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(queenDancer, 'step');
      expect(queenDancer.step.callCount).to.be.equal(0);
      queenDancer.step();
      clock.tick(timeBetweenSteps - 1);
      expect(queenDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps - 1);
      expect(queenDancer.step.callCount).to.be.equal(2);
    });
  });
});
