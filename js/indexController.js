(

function(module){
  var indexController= {};
  indexController.index = function(){
    $(document).ready(function(){
      console.log('hello ');
      Trails.fetchAll();
      $('#trail-template').hide();
      $('.individual-trails').hide();
      $('.easy-pictures').hide();
      $('.moderate-pictures').hide();
      $('.difficult-pictures').hide();
      $('#map').show();
      $('.home-title').show();
      $('.easy-title').hide();
      $('.moderate-title').hide();
      $('.difficult-title').hide();
      $('.page-background' ).removeClass().addClass('home-background');
      $('#map' ).removeClass().addClass('home-map');


    });
  };
  module.indexController = indexController;
})(window);
