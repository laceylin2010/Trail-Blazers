(function(module){

  var banderaMtController = {};

  banderaMtController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#bandera-mountain').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };


  module.banderaMtController = banderaMtController;
})(window);
