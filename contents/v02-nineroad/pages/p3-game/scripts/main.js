function deleteDiv() {
  const div = document.getElementById('div1');
  
    setTimeout(function(){
        div.remove();
    },5000)
  
}

window.onload = function() {
    var interaction01 = document.getElementById("interaction01");
    var interaction02 = document.getElementById("interaction02");

    var anim01 = lottie.loadAnimation( {
        container: interaction01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets1.lottiefiles.com/packages/lf20_sc8hmupw.json'
    })
        
    var anim02 = lottie.loadAnimation( {
        container: interaction02,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets5.lottiefiles.com/packages/lf20_9lzgk146.json'
    })

    interaction01Sound = new Audio('assets/magicChime_pitchUp.mp3');
    changingSound = new Audio('assets/audio/boom.mp3');


    anim01.setSpeed(1);
    anim02.setSpeed(1);

    interaction01.onclick = function() {
        interaction01Sound.pause();
        interaction01Sound.currentTime = 0;
        anim01.goToAndPlay(0, true);
        setTimeout(() => interaction01Sound.play(), 2000);
    }
    
    interaction02.onclick = function() {
        interaction01Sound.pause();
        interaction01Sound.currentTime = 0;
        anim02.goToAndPlay(0, true);
        setTimeout(() => interaction01Sound.play(), 2000);
        setTimeout(function(){
            console.log("turning to the next page");
            parent.nextContent();
        },5000)
    }
}