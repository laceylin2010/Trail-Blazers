(function(module){
  var moderateController = {};

  moderateController.index = function(){
    Trails.fetchAll();
    $('.moderate-trails').on(function(){
      $('.hiking-pic-bar').hide();
      $('#map').toggle();
      $('.trail-template').show();
      $('.moderate-pictures').show();

    });
  };



  module.moderateController = moderateController;
})(window);
