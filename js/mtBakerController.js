(function(module){

  var mtBakerController = {};

  mtBakerController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#mt-baker-standard-summit-route').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };
  module.mtBakerController = mtBakerController;
})(window);
