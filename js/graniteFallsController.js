(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    Trails.fetchAll();
    $('#granite-mountain').show();
  }
  module.graniteFallsController = graniteFallsController;
})(window)
