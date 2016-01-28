(function(module){

  var wenatcheeCrestController = {};

  wenatcheeCrestController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#wenatchee-crest').show();
    $('#map').show();
    $('.home-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
  };








  module.wenatcheeCrestController = wenatcheeCrestController;
})(window);
