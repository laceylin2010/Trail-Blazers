(function(module){

  var littleSiController = {};

  littleSiController.index = function(){
    $('hiking-pic-bar').hide();
    $('.individual-trails').hide();
    $('#trail-template').show();
    $('#little-si').show();
    $('#map').toggle();
  };

  module.littleSiController = littleSiController;
})(window);
