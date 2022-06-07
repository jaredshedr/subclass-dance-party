var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="moving-dancer" src="img/catwoman.png" alt="a catwoman image">');
  this.setPosition(top, left);
};

makeMovingDancer.prototype = Object.create(makeBatmanDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    opacity: "toggle",
    left: "toggle",
    height: "toggle"
  }, 500);
};
