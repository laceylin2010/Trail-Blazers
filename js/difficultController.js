(function(module){

  var difficultController = {};
  difficultController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.easy-pictures').hide();
    $('#map').hide();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').show();
    $('.difficult-pictures').show();
    $('.home-background' ).removeClass().addClass('page-background');

  };
  module.difficultController = difficultController;
})(window);
