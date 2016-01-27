page.base('/');

page('/', indexController.index);
page('/easy', easyController.index);
// page('/moderate', moderateController.index);
// page('/difficult', difficultController.index);
// page('/aboutUs', aboutUsController.index);

page();
