(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.inividual-trails').hide();
    $('#granite-mountain').show();
    $('#map').toggle();
    };
  module.graniteFallsController = graniteFallsController;
})(window);
