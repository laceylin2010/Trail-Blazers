(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#granite-mountain').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.graniteFallsController = graniteFallsController;
})(window);
