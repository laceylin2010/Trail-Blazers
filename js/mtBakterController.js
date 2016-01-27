(function (module){
  var mtBakerController= {};

  mtBakerController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-tempalte').show();
    $('.individual-trails').hide();
    $('#mt-baker-standard-summit-route').show();

  };
  module.mtBakerController = mtBakerController;
})(window);
