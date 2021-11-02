window.onload = function () {
    narr = document.getElementById('narr');

    hand_obj = document.getElementById('handinhand');

    hand = bodymovin.loadAnimation({
        container: hand_obj,
        path: 'assets/json/data.json',
        renderer: 'svg/canvas/html',
        loop: false,
        autoplay: false
    });

    hand_obj.onclick = function () {
        narr.pause();
        hand.play();
        hand_obj.classList.remove('notclicked');
    }

    hand.addEventListener('complete', function () {
        console.log('complete fired');
        parent.startGame();
    })

    narr.onended = function () {
        setTimeout(parent.startGame, 5000);
    }

}