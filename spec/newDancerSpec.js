describe('batmanDancer', function() {

  var batmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batmanDancer = new makeBatmanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(batmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(batmanDancer.$node, 'toggle');
    batmanDancer.step();
    expect(batmanDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(batmanDancer, 'step');
      expect(batmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(batmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batmanDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('movingDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new makeMovingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(movingDancer.$node, 'animate');
    movingDancer.step();
    expect(movingDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(movingDancer, 'step');
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });
});