(function(module){
  var indexController= {};

  indexController.index = function(){

    $('.easy-pictures').hide();
    $('.moderate-pictures').hide();
    $('.difficult-pictures').hide();
    $('#map').hide();
  };
  module.indexController = indexController;
})(window);
