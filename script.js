const imageList = [
    'Covers/forest-city.png',
    'Covers/balcony-cat.png',
    'Covers/balcony.png',
    'Covers/bamboo.png',
    'Covers/city.png',
    'Covers/girl.png',
    'Covers/room.png',
    'Covers/shimoda.png',
    'Covers/smoke-cat.png',
    'Covers/tokyo.png'

]

function getRandomImage() {
    ranIndex = Math.floor(Math.random()*imageList.length);
    return imageList[ranIndex];
}

function setRandomBackground() {
    const backDIV = document.querySelector('.background-image');
    const randomImage = getRandomImage();
    backDIV.style.backgroundImage = `url(${randomImage})`;
}

document.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('load', function() {
    setRandomBackground();
  });

})

// enlarge song title make clickable
const songTitles = document.querySelectorAll('.song-title');
songTitles.forEach(function(songTitle) {
  songTitle.addEventListener('mouseover', function() {

    // increase size
    songTitle.style.fontSize = '26px';
    songTitle.style.margin='1.5px';
  })
    // cursor hover
    songTitle.addEventListener('mouseenter', function() {
    songTitle.classList.add('clickable');
    })

    // reduce size
    songTitle.addEventListener('mouseout', function() {
    songTitle.style.fontSize = '24px';
    songTitle.style.margin = '2.5px';
    })

    // remove cursor hover 
  songTitle.addEventListener('mouseleave', function() {
    songTitle.classList.remove('clickable')
  })
})

// popup window
  const popupTriggers = document.querySelectorAll('.song-title');
  const overlay = document.getElementById('overlay');
  const popup = document.getElementById('popup');
  const closeBtn = document.querySelector('.close');
  const popPlayer = document.getElementById('iframePop');

  // Open popup when <h1> is clicked
  popupTriggers.forEach(function(popupTrigger) {
  popupTrigger.addEventListener('click', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    const youtubeLink = popupTrigger.parentElement.dataset.video;
    popPlayer.setAttribute('src', youtubeLink);
    });
  });

  // Close popup when close button is clicked
  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    popPlayer.src = '';
  });

  // Close popup when clicking outside of it
  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    popPlayer.src = '';
  });

// icon enlarge 
const icons = document.querySelectorAll('.menu img');
icons.forEach(function(icon) {
    icon.addEventListener('mouseover', function() {
      icon.style.width = '79px';
      icon.style.padding = '18px';
      })
      icon.addEventListener('mouseleave', function() {
        icon.style.width = '75px';
        icon.style.padding = '20px';
      })
      
    });

// function to elrage icon 
function enlarge(item, firstSize, firstPadding, secondSize, secondPadding) {
  item.addEventListener('mouseover', function(){
    item.classList.add('clickable');
    item.style.width = firstSize+'px';
    item.style.margin = firstPadding+'px';
  })
  item.addEventListener('mouseleave', function(){
    item.classList.remove('clickable');
    item.style.width = secondSize+'px';
    item.style.margin = secondPadding+'px';
  })
}

// enlarge heart
const gifs = document.querySelectorAll('.heart img');
gifs.forEach(function(gif) {
  enlarge(gif, 37, 4, 35, 5);
  const animatedGif = gif.getAttribute('data-animated-src');
  const likedGif = gif.getAttribute('data-liked-src');
  const unlikedGif = gif.getAttribute('data-unlike-src');
  
  
  let clicked = false;
  // gif animation
  
  gif.addEventListener('click', function(){
    if (!clicked) {  
      gif.src = animatedGif;
      setTimeout(function(){
        gif.src = likedGif;
      }, 2500)
      clicked = true;
    } else {
      gif.src = unlikedGif;
      clicked = false;
      };
    });
  });

// enlarge download butt
const downButts = document.querySelectorAll('.download img');
downButts.forEach(function(downButt){
  enlarge(downButt, 37, 4, 35, 5);
});

function pauseCurrentAudioPlayer() {
  if (currentSong) {
      currentSong.pause();
  }
}
  
// enlarge shuffle
var currentSong = null; 
const shuffle = document.querySelector('#shuffle-button img');
enlarge(shuffle, 77, 0, 75, 1);

shuffle.addEventListener('click', function(){
  if (currentSong) {
    currentSong.pause();
    randIndex = Math.floor(Math.random() * audioPlayers.length);
    const randSong = audioPlayers[randIndex];
    randSong.play();
    currentSong = randSong;
  } else {
  randIndex = Math.floor(Math.random() * audioPlayers.length);
  const randSong = audioPlayers[randIndex];
  randSong.play();
  currentSong = randSong;
};});


// auto play
// create node list of all audio players as audioPlayers
var audioPlayers = document.querySelectorAll('.audio-player');
audioPlayers.forEach(function(audioPlayer){
  audioPlayer.addEventListener('ended', function(){
    // find current index of song
    var currentIndex = Array.from(audioPlayers).indexOf(audioPlayer);
    var nextIndex = (currentIndex + 1) % audioPlayers.length;
    var nextAudioPlayer = audioPlayers[nextIndex];
        
        // Play the next audio player
        if (nextAudioPlayer) {
            nextAudioPlayer.play();}
  })}
)


