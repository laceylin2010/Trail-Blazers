(function(module){

  var rattlesnakeRidgeController = {};

  rattlesnakeRidgeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#rattlesnake-ridge').show();
    $('#map').show();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };


  module.rattlesnakeRidgeController = rattlesnakeRidgeController;
})(window);
