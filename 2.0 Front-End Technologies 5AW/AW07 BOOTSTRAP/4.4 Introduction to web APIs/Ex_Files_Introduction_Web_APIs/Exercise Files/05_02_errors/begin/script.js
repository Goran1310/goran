var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/product1');

request.onload = function() {
	var response = request.response;
	var jsonData = JSON.parse(response);
	console.log(jsonData);
};

request.send();