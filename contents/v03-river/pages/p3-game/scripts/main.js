window.onload = function() {
    wb = document.getElementById('whitebird');
    wb2 = document.getElementById('whitebird2');

    narr = new Audio('assets/audio/output.mp3');
    narr.play();

    right = new Audio();
    right.src = 'assets/audio/right.mp3';

    wb.onclick = function() {
        wb.style.display = 'none';
        wb2.style.display = 'block';
        right.play();

        setTimeout(parent.startGame, 2000);
    }

    narr.onended = function() {
        setTimeout(parent.startGame, 5000);
    }
}