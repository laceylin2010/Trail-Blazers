(function(module){

  var pretzelTreeController = {};

  pretzelTreeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#pretzel-tree').show();
    $('.home-title').hide();
    $('#map').show();
    $('.home-background' ).removeClass().addClass('page-background');
  };








  module.pretzelTreeController = pretzelTreeController;
})(window);
