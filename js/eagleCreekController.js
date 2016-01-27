(function(module){

  var eagleCreekController = {};

  eagleCreekController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#eagle-creek').show();
    $('#map').show();
  };


  module.eagleCreekController = eagleCreekController;
})(window);
