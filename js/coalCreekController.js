(function(module){

  var coalCreekController = {};

  coalCreekController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#coal-creek').show();
    $('#map').toggle();
  };








  module.coalCreekController = coalCreekController;
})(window);