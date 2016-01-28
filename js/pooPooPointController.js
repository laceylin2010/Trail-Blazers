(function(module){

  var pooPooPointController = {};

  pooPooPointController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#poo-poo-point').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };


  module.pooPooPointController = pooPooPointController;
})(window);
