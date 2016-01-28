(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.difficult-pictures').hide();
    $('#map').hide();
    $('.easy-pictures').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.easyController = easyController;
})(window);
