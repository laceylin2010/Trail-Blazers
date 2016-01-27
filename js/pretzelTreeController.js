(function(module){

  var pretzelTreeController = {};

  pretzelTreeController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#pretzel-tree').show();
    $('#map').toggle();
  };








  module.pretzelTreeController = pretzelTreeController;
})(window);
