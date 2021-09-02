window.onload = function() {
    var interaction01 = document.getElementById("interaction01");

    var anim01 = lottie.loadAnimation( {
        container: interaction01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets1.lottiefiles.com/packages/lf20_sc8hmupw.json'
    })

    interaction01Sound = new Audio('assets/magicChime_pitchUp.mp3');


    anim01.setSpeed(1.2);

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
        setTimeout(() => interaction01Sound.play(), 2000);
        setTimeout(function(){
            console.log("turning to the next page");
            parent.nextContent();
        },5000)
    }
}