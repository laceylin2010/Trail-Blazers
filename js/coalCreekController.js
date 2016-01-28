(function(module){

  var coalCreekController = {};

  coalCreekController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#coal-creek').show();
    $('#map').show();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };








  module.coalCreekController = coalCreekController;
})(window);
