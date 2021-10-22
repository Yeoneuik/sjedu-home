window.onload = function() {
    document.getElementById('yellowbal').onclick = parent.startGame;

    narr = new Audio('assets/audio/video.mp3');

    narr.play();

    narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }
}