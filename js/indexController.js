(function(module){
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
      $('#map').hide();
      $('.home-title').show();
      $('.page-background' ).removeClass().addClass('home-background');


    });
  };
  module.indexController = indexController;
})(window);
