window.onload = function() {
    var interaction01 = document.getElementById("interaction01");
    var played01 = false;
    var anim01 = lottie.loadAnimation( {
        container: interaction01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets9.lottiefiles.com/packages/lf20_rl9vufr3.json'
    })

    interaction01Sound = new Audio('assets/magicChime_pitchUp.mp3');


    anim01.setSpeed(1.2);

    interaction01.onclick = function() {
        if (!played01){
            played01 = true;
        interaction01Sound.pause();
        interaction01Sound.currentTime = 0;
        anim01.goToAndPlay(0, true);
        setTimeout(() => interaction01Sound.play(), 0);
        setTimeout(function(){
            console.log("turning to the next page");
            parent.nextContent();
        },2500)
        }
    }
}