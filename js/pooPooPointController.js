(function(module){

  var pooPooPointController = {};

  pooPooPointController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#poo-poo-point').show();
    $('#map').toggle();
  };


  module.pooPooPointController = pooPooPointController;
})(window);
