(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.difficult-pictures').hide();
    $('#map').hide();
    $('.easy-pictures').show();

  };








  module.easyController = easyController;
})(window);
