window.onload = function() {
    document.getElementById('kirakira').onclick = parent.startGame;

    

    narr = new Audio('assets/audio/output.mp3');

    narr.play();

    narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }
}