(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    $('#trail-template').show();
    $('#granite-mountain').show();
    $('.hiking-pic-bar').hide();
    $('.individual-trails').hide();
    $('#map').show();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };
  module.graniteFallsController = graniteFallsController;
})(window);
