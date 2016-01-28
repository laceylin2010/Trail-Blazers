(function(module){

  var coalCreekController = {};

  coalCreekController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#coal-creek').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };








  module.coalCreekController = coalCreekController;
})(window);
