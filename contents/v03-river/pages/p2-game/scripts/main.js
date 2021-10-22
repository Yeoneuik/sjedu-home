window.onload = function() {

    audios = {
        1: new Audio('assets/audio/mulkkatchi.mp3'),
        2: new Audio('assets/audio/whitepalm.mp3'),
        3: new Audio('assets/audio/mulQuang.mp3')
    }


    document.getElementById('ctnbtn').onclick = parent.startGame;

    for(let i in audios) {
        document.getElementById('click'+i).onclick = function() {
            for(j in audios) {
                audios[j].pause();
            }
            audios[i].currentTime = 0;
            audios[i].play();
        };
    };
}