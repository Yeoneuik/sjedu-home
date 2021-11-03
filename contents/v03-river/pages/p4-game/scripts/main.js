window.onload = function() {
    document.getElementById('kirakira').onclick = parent.startGame;

    narr = document.getElementById('narr');

    narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }
}