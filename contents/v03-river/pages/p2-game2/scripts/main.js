window.onload = function() {
    document.getElementById('yellowbal').onclick = parent.startGame;

    var narr = document.getElementById('narr');

    narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }
}