(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.difficult-pictures').hide();
    $('.easy-pic-list').show();
    $('.moderate-pic-list').hide();
    $('.difficult-pic-list').hide();
    $('#map').hide();
    $('.easy-pictures').fadeIn('slow');
    $('.home-title').hide();
    $('.easy-title').fadeIn('slow');
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.easyController = easyController;
})(window);
