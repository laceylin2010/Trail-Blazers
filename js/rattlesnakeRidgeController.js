(function(module){

  var rattlesnakeRidgeController = {};

  rattlesnakeRidgeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#rattlesnake-ridge').show();
    $('#map').toggle();
  };








  module.rattlesnakeRidgeController = rattlesnakeRidgeController;
})(window);
