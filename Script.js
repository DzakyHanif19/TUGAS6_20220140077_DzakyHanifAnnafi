const video = document.querySelector('video');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

document.querySelector('.audio-text').addEventListener("click", function() {
    alert("NEW ALBUM [THE WEEKND - STARBOY]");
});

document.querySelector('.youtube-button').addEventListener("click", function() {
    alert("You will be redirected to YouTube >>>");
});

document.querySelector('.gambar-container').addEventListener("click", function() {
    alert("Mantap Mantap Mantap!!");
});

document.querySelector('.member').addEventListener("click", function() {
    alert("PROFIL PICTURE THE WEEKND");
});

document.querySelector('.card-header').addEventListener("click", function() {
    alert("CHILL BRO!!!");
});