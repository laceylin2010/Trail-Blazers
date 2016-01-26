(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.easy-trails').on('click', function(){
      $('.individual-trails').hide();
      $('#map').hide();
      $('.easy-pictures').show();
    });
  };








  module.easyController = easyController;
})(window);
