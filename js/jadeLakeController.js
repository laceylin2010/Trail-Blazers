(function(module){

  var jadeLakeController = {};

  jadeLakeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#jade-lake').show();
    $('#map').show();
  };
  module.jadeLakeController = jadeLakeController;
})(window);
