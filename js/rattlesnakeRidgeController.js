(function(module){

  var rattlesnakeRidgeController = {};

  rattlesnakeRidgeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#rattlesnake-ridge').show();
    $('#map').show();
  };


  module.rattlesnakeRidgeController = rattlesnakeRidgeController;
})(window);
