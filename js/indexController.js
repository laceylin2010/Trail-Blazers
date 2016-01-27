(function(module){
  var indexController= {};

  indexController.index = function(){
    $('.easy-pictures').hide();
    $('#map').hide();
  };
  module.indexController = indexController;
})(window);
