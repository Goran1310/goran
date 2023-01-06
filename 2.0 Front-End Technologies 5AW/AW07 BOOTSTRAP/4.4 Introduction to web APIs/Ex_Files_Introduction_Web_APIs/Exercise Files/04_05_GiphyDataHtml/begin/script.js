var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=QUzBBDz2d4WdVUNla8p74D5YgqMaEm8u&tag=squirrel&rating=g');

request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
	var originalUrl = parsedData.data.images.original.url;
	console.log(originalUrl);

	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
	document.body.appendChild(gif);
};

request.send();