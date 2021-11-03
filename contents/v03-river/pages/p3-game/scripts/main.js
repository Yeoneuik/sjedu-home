window.onload = function() {
    wb = document.getElementById('whitebird');
    wb2 = document.getElementById('whitebird2');

    narr = document.getElementById('narr');

    right = document.getElementById('right');

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