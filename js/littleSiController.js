(function(module){

  var littleSiController = {};

  littleSiController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#little-si').show();
    $('#map').toggle();
  };


  module.littleSiController = littleSiController;
})(window);
