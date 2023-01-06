$.ajax ({
    url: 'https://api.giphy.com/v1/gifs/random?api_key=QUzBBDz2d4WdVUNla8p74D5YgqMaEm8u&rating=g',
    success: function(response) {
        console.log(response)
        var originalUrl = response.data.images.original.url;
        $("body").append("<img src = '" + originalUrl + "'></img>")
    }
})