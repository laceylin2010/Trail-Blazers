page.base('');

page('/', indexController.index);
page('/easy', easyController.index);
page('/moderate', moderateController.index);
// page('/difficult', difficultController.index);
// page('/aboutUs', aboutUsController.index);
page('/easy/rattlesnakeRidge', rattlesnakeRidgeController.index);
// page('/easy/pretzelTree', pretzelTreeController.index);
// page('/easy/coalCreek', coalCreekController.index);
// page('/easy/wildsideTrail', wildsideTrailController.index);
// page('/easy/wenatcheeCrest', wenatcheeCrestController.index);
// page('/moderate/littleSi', littleSiController.index);
// page('/moderate/pooPooPoint', pooPooPointController.index);
// page('/moderate/banderaMt', banderaMtController.index);
// page('/moderate/eagleCreek', eagleCreekController.index);
// page('/moderate/wallaceFalls', wallaceFallsController.index);
// page('/difficult/mtBaker', mtBakerController.index);
page('/difficult/graniteMt', graniteFallsController.index);
// page('/difficult/loowitFalls', loowitFallsController.index);
// page('/difficult/mtAdams', mtAdamsController.index);
// page('/difficult/jadeLake', jadeLakeController.index);

page();
