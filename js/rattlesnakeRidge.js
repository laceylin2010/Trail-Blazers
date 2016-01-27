(function(module){

  var easyController = {};

  easyController.index = function(){
    Trails.fetchAll();
    $('#rattlesnake-ridge-link').on('click', function(){
      $('#rattlesnake-ridge').show();
      $('#map').toggle();
      $('.easy-pictures').show();
    });
  };








  module.easyController = easyController;
})(window);
