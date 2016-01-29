(function(module){

  function Trails(trls) {
    this.id = trls.id;
    this.title = trls.title;
    this.location = trls.location;
    this.roundTrip = trls.roundTrip;
    this.difficulty = trls.difficulty;
    this.description = trls.description;
    this.img = trls.img;
  }
  Trails.all = [];

  Trails.loadAll = function (trailData){
    trailData.forEach(function(ele){
      Trails.all.push(new Trails(ele));
    });
  };

  Trails.fetchAll = function(next){
    if(localStorage.trailData){
      Trails.loadAll(JSON.parse(localStorage.trailData));
      Trails.initIndexPage();
      if (next) { next(); }
    } else {
      $.getJSON('/data/trail-data.json').done(function(trailData){
        Trails.loadAll(trailData);
        localStorage.jobData = JSON.stringify(trailData);
        Trails.initIndexPage();
        if (next) { next(); }
      });
    }
  };
  module.Trails=Trails;
})(window);
