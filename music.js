// list music
var playlist = [
    "music1.mp3",
    "music2.mp3",
    "music3.mp3",
    "music4.mp3",
  ];
  var audio = document.getElementById("myAudio");
  var toggleButton = document.querySelector(".toggle__back i");
  var isPlaying = false;

  
  function getRandomSong() {
      var randomIndex = Math.floor(Math.random() * playlist.length);
      return playlist[randomIndex];
  }
  function playRandomSong() {
      var randomSong = getRandomSong();
      audio.src = randomSong;
      audio.play().then(() => {
      audio.muted = false; 
      isPlaying = true;
      toggleButton.classList.remove("fa-play");
      toggleButton.classList.add("fa-pause");
      }).catch((error) => {
          console.log('Autoplay failed:', error);
      });
  }
  
  function pauseSong() {
      audio.pause();
      isPlaying = false;
      toggleButton.classList.remove("fa-pause");
      toggleButton.classList.add("fa-play");
  }

  toggleButton.parentElement.addEventListener('click', function() {
      if (isPlaying) {
          pauseSong();
      } else {
          playRandomSong();
      }
  });

  audio.onended = function() {
      playRandomSong();
  };