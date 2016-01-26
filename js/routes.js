page.base('/');

page('/', homeController.index);
page('/easy', easyController.index);
page('/moderate', moderateController.index);
page('/difficult', difficultController.index);
page('/aboutUs', aboutUsController.index);

page();
