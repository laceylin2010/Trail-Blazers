(function(module){

  var loowitFallsController = {};

  loowitFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#loowit-falls').show();
    $('#map').show();
  };
  module.loowitFallsController = loowitFallsController;
})(window);
