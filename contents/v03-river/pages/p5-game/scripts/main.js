var phase = 0;
/*
phase 0 : pre-selection
phase 1 : after-selection. launching ship
phase 2 : lottie animation start ready
phase 3 : lottie animation playing
*/

var shiptype = 'Leaf';

function setphase(dst) {
    if (phase < dst) {
        phase = dst;
        switch(phase) {
            case 1:

        }
    }
}

window.onload = function() {
    narr = new Audio();
    narr.src = "assets/sound/output.mp3";

    narr2 = new Audio('assets/sound/output2.mp3');

    narr.play();

    magic = new Audio();
    magic.src = "assets/sound/magic.mp3";

    var selleaf = document.getElementById('leaf');
    var selreed = document.getElementById('reed');

    var video = undefined;
    var bg = document.getElementById('bg');

    var lotts = undefined;

    setphase = function(dst) {
        if (phase < dst) {
            phase = dst;
            console.log("onphase:",phase);
            switch(phase) {
                case 1:
                    narr.pause();
                    selleaf.style.display = 'none';
                    selreed.style.display = 'none';
                    video = document.getElementById('vid'+shiptype);
                    video.style.display = 'block';
                    video.onended = function() {
                        setphase(2);
                        video.style.display = 'none';
                    }
                    video.play();
                    return;
                case 2:
                    video.style.display = 'none';
                    bg.style.backgroundImage = "url('assets/img/bg2.png')";
                    lotts = {
                        obj: document.getElementById('progress'),
                        anim: undefined
                    };
                    lotts.anim = bodymovin.loadAnimation({
                        container: lotts.obj,
                        path: 'assets/json/'+shiptype+'/data.json',
                        renderer: 'svg/canvas/html',
                        loop: false,
                        autoplay: false
                    });
                    lotts.obj.style.display = 'block';
                    lotts.obj.onclick = function() {
                        setphase(3);
                    }
                    narr2.play();
                    narr2.onended = function () {
                        setTimeout(() => {
                            if (phase != 3) parent.startGame();
                        }, 5000);
                    }
                    return;
                case 3:
                    magic.play();
                    lotts.obj.classList.remove('proready');
                    lotts.anim.play();
                    lotts.anim.addEventListener('complete', () => {
                        console.log('complete fired');
                        parent.startGame();
                    });
            }
        }
    }

    selleaf.onclick = function() {
        setphase(1);
    }

    selreed.onclick = function() {
        shiptype = 'Reed';
        setphase(1);
    }

    setTimeout(() => {setphase(1)}, 13000);
}