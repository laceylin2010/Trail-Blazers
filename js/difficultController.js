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
    $('.difficult-title').fadeIn('slow');
    $('.difficult-pictures').fadeIn('slow');
    $('.home-background' ).removeClass().addClass('page-background');

  };
  module.difficultController = difficultController;
})(window);
