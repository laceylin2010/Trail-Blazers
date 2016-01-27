(function(module){

  var difficultController = {};
  difficultController.index = function(){
    $('.individual-trails').hide();
    $('.moderate-pictures').hide();
    $('.easy-pictures').hide();
    $('#map').hide();
    $('.difficult-pictures').show();

  };
  module.difficultController = difficultController;
})(window);
