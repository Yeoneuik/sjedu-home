window.onload = function() {
    var q01 = document.getElementById("q01");
    var q02 = document.getElementById("q02");
    var q03 = document.getElementById("q03");
    var q04 = document.getElementById("q04");

    var anim01 = lottie.loadAnimation( {
        container: q01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets9.lottiefiles.com/packages/lf20_fycc7z4n.json'
    })
    
    var anim02 = lottie.loadAnimation( {
        container: q02,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets10.lottiefiles.com/packages/lf20_zutnxlad.json'
    })
    
    var anim03 = lottie.loadAnimation( {
        container: q03,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets9.lottiefiles.com/packages/lf20_kly2qzvs.json'
    })
    
    var anim04 = lottie.loadAnimation( {
        container: q04,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets7.lottiefiles.com/packages/lf20_v5oxznz5.json'
    })

    q01Sound = new Audio('assets/audio/q01.wav');
    q02Sound = new Audio('assets/audio/q02.wav');
    q03Sound = new Audio('assets/audio/q03.wav');
    q04Sound = new Audio('assets/audio/q04.wav');


    anim01.setSpeed(1);

    // 호버시 재생
    // book.addEventListener('mouseenter', function() {
    //     anim.play();
    // })

    // book.addEventListener('mouseleave', function() {
    //     anim.stop()
    // })

    q01.onclick = function() {
        q01Sound.pause();
        q01Sound.currentTime = 0;
        anim01.goToAndPlay(0, true);
        setTimeout(() => q01Sound.play(), 0);
    }
    
     q02.onclick = function() {
        q02Sound.pause();
        q02Sound.currentTime = 0;
        anim02.goToAndPlay(0, true);
        setTimeout(() => q02Sound.play(), 0);
    }
     
     q03.onclick = function() {
        q03Sound.pause();
        q03Sound.currentTime = 0;
        anim03.goToAndPlay(0, true);
        setTimeout(() => q03Sound.play(), 0);
    }
     
     q04.onclick = function() {
        q04Sound.pause();
        q04Sound.currentTime = 0;
        anim04.goToAndPlay(0, true);
        setTimeout(() => q04Sound.play(), 0);
    }
     
}