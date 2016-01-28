(function(module){

  var jadeLakeController = {};

  jadeLakeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#jade-lake').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.jadeLakeController = jadeLakeController;
})(window);
