describe('lineup', function() {

  var lineup, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    var lineup = lineUp([new BlinkyDancer, new BishopDancer]);
  });

  it('should be a function', function() {
    expect(lineup).to.be.function;
  });

  it('should be a void function', function() {
    expect(lineup).to.be.a('undefined');
  });
});
