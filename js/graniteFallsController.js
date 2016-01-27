(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#granite-mountain').show();
    $('#map').toggle();
  };
  module.graniteFallsController = graniteFallsController;
})(window);
