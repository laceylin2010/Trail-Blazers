(function(module){

  var coalCreekController = {};
  var mtView = function(){
    $('.hiking-pic-bar').hide();
    $('.individual-trails').hide();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.easy-pic-list').hide();
    $('.moderate-pic-list').hide();
    $('form').hide();
    $('.form-title')/hide();
    $('.difficult-pic-list').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.movie').hide();
    $('#trail-template').show();
    $('#coal-creek').show();
    $('#map').show();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };

  coalCreekController.index = function(){
    if(Trails.all.length == 0){
      Trails.fetchAll(mtView);
    }else{
      mtView();
    }
  };


  module.coalCreekController = coalCreekController;
})(window);
