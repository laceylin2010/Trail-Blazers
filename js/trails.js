(function(module){

  function Trails(trls) {
    this.title = trls.title;
    this.location = trls.location;
    this.roundTrip = trls.roundTrip;
    this.difficulty = trls.difficulty;
    this.description = trls.description;
  }
  Trails.all = [];

  Trails.loadAll = function (trailData){
    trailData.forEach(function(ele){
      Trails.all.push(new Trails(ele));
    });
  };

  Trails.fetchAll = function(){
    if(localStorage.trailData){
      Trails.loadAll(JSON.parse(localStorage.trailData));
      Trails.initIndexPage();
    } else {
      $.getJSON('/data/trail-data.json').done(function(trailData){
        Trails.loadAll(trailData);
        localStorage.jobData = JSON.stringify(trailData);
        Trails.initIndexPage();
      });
    }
  };
  module.Trails=Trails;
})(window);
