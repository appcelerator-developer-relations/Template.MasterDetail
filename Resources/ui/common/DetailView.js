function DetailView() {
	var self = Ti.UI.createView({
		backgroundColor:'e3e3e3'
	});

	var lbl = Ti.UI.createLabel({
		text:'Please select an item',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);

	self.addEventListener('itemSelected', function(e) {
		lbl.text = e.name+': $'+e.price;
	});

	return self;
};

module.exports = DetailView;
