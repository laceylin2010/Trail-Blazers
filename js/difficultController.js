(function(module){

  var difficultController = {};
  difficultController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.easy-pictures').hide();
    $('.easy-pic-list').hide();
    $('.moderate-pic-list').hide();
    $('form').hide();
    $('.difficult-pic-list').show();
    $('#map').hide();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.movie').hide();
    $('.difficult-title').fadeIn('slow');
    $('.difficult-pictures').fadeIn('slow');
    $('.home-background' ).removeClass().addClass('page-background');

  };
  module.difficultController = difficultController;
})(window);
