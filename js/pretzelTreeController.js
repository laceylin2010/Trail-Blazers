(function(module){

  var pretzelTreeController = {};

  pretzelTreeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#pretzel-tree').show();
    $('.home-title').hide();
    $('#map').show();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };








  module.pretzelTreeController = pretzelTreeController;
})(window);
