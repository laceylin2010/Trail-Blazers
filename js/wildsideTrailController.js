(function(module){

  var wildsideTrailController = {};

  wildsideTrailController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#wildside-trail').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };








  module.wildsideTrailController = wildsideTrailController;
})(window);
