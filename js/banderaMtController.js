(function(module){

  var banderaMtController = {};

  banderaMtController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#bandera-mountain').show();
    $('#map').show();
  };


  module.banderaMtController = banderaMtController;
})(window);
