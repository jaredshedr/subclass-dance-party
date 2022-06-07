var makeBatmanDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="bat-man" src="img/batman.png" alt="a batman image">');
  this.setPosition(top, left);
};

makeBatmanDancer.prototype = Object.create(makeDancer.prototype);
makeBatmanDancer.prototype.constructor = makeBatmanDancer;

makeBatmanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  $('.bat-man').on( "mouseover", function() {

    $(this).animate({top: Math.random() * 1000, left: Math.random() * 1000}, 500,
      function () { this.setPosition(top, left); });
  });

  this.$node.toggle();

};
