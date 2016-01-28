(function(module){

  var eagleCreekController = {};

  eagleCreekController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#eagle-creek').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };


  module.eagleCreekController = eagleCreekController;
})(window);
