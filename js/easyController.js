(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.easy-trails').on('click', function(){
      $('.moderate-pictures').hide();
      $('.difficult-pictures').hide();
      $('#map').hide();
      $('.easy-pictures').show();
    });
  };








  module.easyController = easyController;
})(window);
