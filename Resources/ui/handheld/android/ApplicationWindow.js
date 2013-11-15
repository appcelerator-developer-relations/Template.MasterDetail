function ApplicationWindow() {
	//declare module dependencies
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');

	//create object instance
	var self = Ti.UI.createWindow({
		title:'Products',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});

	//construct UI
	var masterView = MasterView();
	self.add(masterView);

	//add behavior for master view
	masterView.addEventListener('itemSelected', function(e) {
		//create detail view container
		var detailView = DetailView();
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Product Details',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});

	return self;
};

module.exports = ApplicationWindow;
