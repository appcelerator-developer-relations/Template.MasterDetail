function MasterView() {
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	//some dummy data for our table view
	var tableData = [
		{title:'Apples', price:'1.25', hasChild:true},
		{title:'Grapes', price:'1.50', hasChild:true},
		{title:'Oranges', price:'2.50', hasChild:true},
		{title:'Bananas', price:'1.50', hasChild:true},
		{title:'Pears', price:'1.40', hasChild:true},
		{title:'Kiwis', price:'1.00', hasChild:true}
	];
	
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});
	
	return self;
};

module.exports = MasterView;