//Smart contract mock-up

var list = [1,2,3];

//state changing functions
var addElement = function(data) {
	list.push(data);
}

var changeElement = function(i, data) {
	list[i] = data;
}

//read only function
var viewElement = function(i) {
	return list[i];
}
