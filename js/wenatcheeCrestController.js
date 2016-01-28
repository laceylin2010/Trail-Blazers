(function(module){

  var wenatcheeCrestController = {};

  wenatcheeCrestController.index = function(){
    $('.hiking-pic-bar').hide();
    $('#trail-template').show();
    $('.individual-trails').hide();
    $('#wenatchee-crest').show();
    $('#map').show();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };








  module.wenatcheeCrestController = wenatcheeCrestController;
})(window);
