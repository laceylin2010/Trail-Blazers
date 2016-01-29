(function(module){

  var aboutController = {};

  aboutController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.difficult-pictures').hide();
    $('.easy-pic-list').hide();
    $('.moderate-pic-list').hide();
    $('.difficult-pic-list').hide();
    $('#map').hide();
    $('.movie').hide();
    $('.easy-pictures').hide('slow');
    $('.home-title').hide();
    $('.easy-title').hide('slow');
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('form').show();
    $('.home-background' ).removeClass().addClass('page-background');
  };


  module.aboutController = aboutController;
})(window);
