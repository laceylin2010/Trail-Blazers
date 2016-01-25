Trails.all = [];

function Trails(trls) {
  this.title = trls.title;
  this.location = trls.location;
  this.distance = trls.distance;
  this.difficulty = trls.difficulty;
  this.description = trls.description;
}

Trails.loadAll = function (trailData){
  trailData.forEach(function(ele){
    Trails.all.push(new Trail (ele));
  });
};

Trails.fetchAll = function(){
  if(localStorage = trailData){
    Trails.loadAll(JSON.parse(localStorage.trailData);
    //need to build function to add to index page//
  } else {
    $.getJSON('/data/trail-data.json').done(function(trailData){
      Trails.loadAll(trailData);
      localStorage.jobData = JSON.stringify(trailData);
      //need to add the index function that displays on page//
    })
  }

}
