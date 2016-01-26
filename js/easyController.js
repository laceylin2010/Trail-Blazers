(function(module){

  var easyController = {};

  easyController.index = function(){
    $('.easy-trails').on(function(){
      $('.individual-trails').hide();
      $('#map').toggle();
      $('.easy-pictures').show();
    });
  };








  module.easyController = easyController;
})(window);
