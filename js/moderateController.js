(function(module){
  var moderateController = {};

  moderateController.index = function(){
    $('.moderate-trails').on('click',function(){
      console.log('hey I am here');
      $('.hiking-pic-bar').hide();
      $('#trail-template').hide();
      $('#map').hide();
      $('.easy-pic-list').hide();
      $('form').hide();
      $('.moderate-pic-list').show();
      $('.difficult-pic-list').hide();
      $('.easy-pictures').hide();
      $('.difficult-pictures').hide();
      $('.movie').hide();
      $('.form-title')/hide();
      $('.moderate-pictures').fadeIn('slow');
      $('.home-title').hide();
      $('.easy-title').hide();
      $('.moderate-title').fadeIn('slow');
      $('.difficult-title').hide();
      $('.home-background' ).removeClass().addClass('page-background');
      $('#map' ).removeClass().addClass('trail-map');

    });
  };



  module.moderateController = moderateController;
})(window);
