(function(module){

  var loowitFallsController = {};
  var mtView = function(){
    $('.hiking-pic-bar').hide();
    $('.individual-trails').hide();
    $('.home-title').hide();
    $('.easy-title').hide();
    $('.moderate-title').hide();
    $('.difficult-title').hide();
    $('.easy-pic-list').hide();
    $('.moderate-pic-list').hide();
    $('.difficult-pic-list').hide();
    $('.movie').hide();
    $('#trail-template').show();
    $('#loowit-falls').show();
    $('#map').show();
    $('.home-background' ).removeClass().addClass('page-background');
    $('#map' ).removeClass().addClass('trail-map');
  };

  loowitFallsController.index = function(){
    if(Trails.all.length == 0){
      Trails.fetchAll(mtView);
    }else{
      mtView();
    }
  };


  module.loowitFallsController = loowitFallsController;
})(window);
