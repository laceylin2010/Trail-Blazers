(function(module){

  var eagleCreekController = {};
  var mtView = function(){
    $('.hiking-pic-bar').hide();
    $('.individual-trails').hide();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('form').hide();
    $('.easy-pic-list').hide();
    $('.moderate-pic-list').hide();
    $('.difficult-pic-list').hide();
    $('.movie').hide();
    $('.form-title').hide();
    $('#trail-template').show();
    $('#eagle-creek').show();
    $('#map').show();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };

  eagleCreekController.index = function(){
    if(Trails.all.length == 0){
      Trails.fetchAll(mtView);
    }else{
      mtView();
    }
  };


  module.eagleCreekController = eagleCreekController;
})(window);
