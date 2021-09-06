window.onload = function() {
    var interaction01 = document.getElementById("interaction01");
    var interaction02 = document.getElementById("interaction02");

    var anim01 = lottie.loadAnimation( {
        container: interaction01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets8.lottiefiles.com/packages/lf20_m2s794sc.json'
    })
    
    var anim02 = lottie.loadAnimation( {
        container: interaction02,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets8.lottiefiles.com/packages/lf20_eubaoagy.json'
    })

    interaction01Sound = new Audio('assets/magicChime_pitchUp.mp3');
    interaction02Sound = new Audio('assets/magicChime_original.mp3');


    anim01.setSpeed(1);
    anim02.setSpeed(1.2);

    // 호버시 재생
    // book.addEventListener('mouseenter', function() {
    //     anim.play();
    // })

    // book.addEventListener('mouseleave', function() {
    //     anim.stop()
    // })

    interaction01.onclick = function() {
        interaction01Sound.pause();
        interaction01Sound.currentTime = 0;
        anim01.goToAndPlay(0, true);
        setTimeout(() => interaction01Sound.play(), 0);
    }
    
     interaction02.onclick = function() {
        interaction02Sound.pause();
        interaction02Sound.currentTime = 0;
        anim02.goToAndPlay(0, true);
        setTimeout(() => interaction02Sound.play(), 0);
    }
     
     document.getElementById('nextBtn').onclick = parent.nextContent;
}