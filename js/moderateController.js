(function(module){
  var moderateController = {};

  moderateController.index = function(){
    $('.moderate-trails').on('click',function(){
      console.log('hey I am here');
      $('.hiking-pic-bar').hide();
      $('#trail-template').hide();
      $('#map').hide();
      $('.moderate-pictures').show();
      $('.home-title').hide();
      $('.home-background' ).removeClass().addClass('page-background');

    });
  };



  module.moderateController = moderateController;
})(window);
