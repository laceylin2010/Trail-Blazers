(function (module){
  var graniteFallsController= {};

  graniteFallsController.index = function(){
    Trails.fetchAll();
    $('#trail-template').hide();
    $('.hiking-pic-bar').hide();
    $('#map').toggle();
    $('#granite-mountain').show();
    };
  module.graniteFallsController = graniteFallsController;
})(window);
