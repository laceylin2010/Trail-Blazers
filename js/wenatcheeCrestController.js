(function(module){

  var wenatcheeCrestController = {};

  wenatcheeCrestController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#wenatchee-crest').show();
    $('#map').show();
  };








  module.wenatcheeCrestController = wenatcheeCrestController;
})(window);
