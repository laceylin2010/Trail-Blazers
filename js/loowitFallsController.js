(function(module){

  var loowitFallsController = {};

  loowitFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#loowit-falls').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.loowitFallsController = loowitFallsController;
})(window);
