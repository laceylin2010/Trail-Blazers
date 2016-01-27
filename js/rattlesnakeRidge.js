(function(module){

  var rattlesnakeRidgeController = {};

  rattlesnakeRidgeController.index = function(){
    Trails.fetchAll();
    // $('#rattlesnake-ridge-link').on('click', function(){
    //   $('#rattlesnake-ridge').show();
    //   $('#map').toggle();
    //   $('.easy-pictures').show();
    // });
  };








  module.rattlesnakeRidgeController = rattlesnakeRidgeController;
})(window);
