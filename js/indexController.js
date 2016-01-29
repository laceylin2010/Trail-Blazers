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
      $('.easy-pic-list').hide();
      $('form').hide();  
      $('.moderate-pic-list').hide();
      $('.difficult-pic-list').hide();
      $('#map').show();
      $('.movie').show();
      $('.home-title').fadeIn('slow');
      $('.easy-title').hide();
      $('.moderate-title').hide();
      $('.difficult-title').hide();
      $('.page-background' ).removeClass().addClass('home-background');
      $('#map' ).removeClass().addClass('home-map');


    });
  };
  module.indexController = indexController;
})(window);
