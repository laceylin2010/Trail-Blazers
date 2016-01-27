(function(module){

  var easyController = {};

  easyController.index = function(){
    Trails.fetchAll();
    $('.easy-trails').on(function(){
      $('#trail-template').show();
      $('#map').toggle();
      $('.easy-pictures').show();
    });
  };








  module.easyController = easyController;
})(window);
