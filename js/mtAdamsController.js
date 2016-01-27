(function(module){

  var mtAdamsController = {};

  mtAdamsController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#mt-adams-standard-summit').show();
    $('#map').show();
  };
  module.mtAdamsController = mtAdamsController;
})(window);
