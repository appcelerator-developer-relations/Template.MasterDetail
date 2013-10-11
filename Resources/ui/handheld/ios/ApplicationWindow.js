function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');

	//construct UI
	var masterView = MasterView(),
		detailView = DetailView();

	//create master view container
	var masterContainerWindow = Ti.UI.createWindow({
		title:'Products'
	});
	masterContainerWindow.add(masterView);

	//create detail view container
	var detailContainerWindow = Ti.UI.createWindow({
		title:'Product Details'
	});
	detailContainerWindow.add(detailView);

	//create iOS specific NavGroup UI
	var navGroup = Ti.UI.iOS.createNavigationWindow({
		window:masterContainerWindow
	});

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
		navGroup.openWindow(detailContainerWindow);
	});

	return navGroup;
};

module.exports = ApplicationWindow;
