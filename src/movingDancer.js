var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="moving-dancer"></span>');
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
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
    console.log("Animated!")
  });
};

/*
makeMovingDancer.prototype.move = function() {
  $(this).css({
    width: function( index, value ) {
      return parseFloat( value ) * 1.2;
    },
  });
*/

  // this.$node.css(styleSettings);
