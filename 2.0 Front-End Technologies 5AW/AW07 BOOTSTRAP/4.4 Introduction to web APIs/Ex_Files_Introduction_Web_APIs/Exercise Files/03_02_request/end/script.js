var request = new XMLHttpRequest();

request.open('GET', "https://www.boredapi.com/api/activity/");

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
}

request.send();