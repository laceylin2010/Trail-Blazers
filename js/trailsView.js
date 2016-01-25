var trailView ={};

Trails.initIndexPage = function(){
  var template = Handlebars.compile($('#trail-descriptions').text());
  Trails.all.forEach(function(a){
    $('#trail-template').append(template(a));
  });
};
