const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const controlsContainer = document.getElementById('controls');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.querySelector('.progress-bar .progress');

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "/Music Player/Music/in-slow-motion-inspiring-ambient-lounge-219592.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "/Music Player/Music/night-detective-226857.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "/Music Player/Music/nightfall-future-bass-music-228100.mp3" },
];

function loadSong(song) {
    document.getElementById('song-title').innerText = song.title;
    document.getElementById('artist-name').innerText = song.artist;
    audioPlayer.src = song.src;
}

function playSong() {
    audioPlayer.play();
    playButton.innerText = "Pause";
    isPlaying = true;
    updateProgress();
}

function pauseSong() {
    audioPlayer.pause();
    playButton.innerText = "Play";
    isPlaying = false;
}

playButton.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (isPlaying) playSong();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    if (isPlaying) playSong();
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value / 100;
});

// Progress Bar Update
audioPlayer.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

loadSong(songs[currentSongIndex]);

