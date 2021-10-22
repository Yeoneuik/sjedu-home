window.onload = function() {
    wrongs = {
        boongu: null,
        pirami: null,
        songsari: null
    };

    var isRight = false;

    var narr = new Audio('assets/audio/output.mp3');
    narr.play();

    for(let fish in wrongs) {
        wrongs[fish] = new Audio('assets/audio/wrong_'+fish+'.wav');
        document.getElementById(fish).onclick = function() {
            narr.pause();
            if(!isRight) {
                for(let fi in wrongs) {
                    wrongs[fi].pause();
                }
                wrongs[fish].currentTime=0;
                wrongs[fish].play();
            }
        }
    }

    right = new Audio('assets/audio/right.mp3')
    document.getElementById('right').onclick = function() {
        isRight = true;
        narr.pause();
        for(let fi in wrongs) {
            wrongs[fi].pause();
        }
        right.play();
        right.onended = function() {
            console.log('end fired');
            parent.startGame();
        }
    }
}