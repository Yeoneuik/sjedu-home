var global = {
    playUntil: 0,
    video: undefined,
    phase: 0,
    time: [3.2, 4.5, 6.5, 7.65, 100],
    changing: false
}

function getBtn(i) {
    return document.getElementById('btn'+i);
}

function resumeVideo() {
    if (global.video.currentTime >= global.time[global.phase]) {
        global.video.pause();
        global.changing = false;
        getBtn(global.phase+1).classList.add('clickable');
    } else {
        if(!global.changing) {
            global.video.play();
            global.changing = true;
        }  
        window.requestAnimationFrame(resumeVideo);
    }
}

function nextPhase() {
    getBtn(global.phase+1).classList.remove('clickable');
    global.phase += 1;
    resumeVideo();
}

window.onload = function() {
    global.video = document.getElementById('video');

    global.video.onended = function() {
        setTimeout(parent.startGame, 1500);
    }

    for(let i of [1, 2, 3, 4]) {
        getBtn(i).onclick = function() {
            if(!global.changing) {
                if(global.phase == i-1) {
                    nextPhase();
                }
            }
        }
    }

    resumeVideo();
}