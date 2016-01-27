(function(module){
  var moderateController = {};

  moderateController.index = function(){
    $('.moderate-trails').on('click',function(){
      console.log('hey I am here');
      $('.hiking-pic-bar').hide();
      $('#trail-template').hide();
      $('#map').toggle();
      $('.moderate-pictures').show();

    });
  };



  module.moderateController = moderateController;
})(window);
