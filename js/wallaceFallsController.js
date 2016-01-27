(function(module){

  var wallaceFallsController = {};

  wallaceFallsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#wallace-falls').show();
    $('#map').toggle();
  };


  module.wallaceFallsController = wallaceFallsController;
})(window);
