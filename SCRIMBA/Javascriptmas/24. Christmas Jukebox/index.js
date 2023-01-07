const player = document.getElementById("player")

function playSong(id) {
  // Challenge: Add code here to make the youtube player play the new YouTube song
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`
  nowPlaying.innerHTML = `Now Playing: ${title}`
}