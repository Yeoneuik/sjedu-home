var anims = {
    ja: { //장구
        anim: null,
        obj: null,
        sound: null,
        delay: 850,
        timeout: null
    },
    kk: { //꽹과리
        anim: null,
        obj: null,
        sound: null,
        delay: 800,
        timeout: null
    },
    ji: { //징
        anim: null,
        obj: null,
        sound: null,
        delay: 850,
        timeout: null
    },
    yo: { //용고
        anim: null,
        obj: null,
        sound: null,
        delay: 660,
        timeout: null
    }
}

window.onload = function () {
    for (let [id, obj] of Object.entries(anims)) {
        obj.obj = document.getElementById(id);
        obj.anim = lottie.loadAnimation({
            container: obj.obj,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: 'assets/' + id + '/data.json'
        });

        obj.sound = new Audio('assets/' + id + '/sound.wav');
        obj.anim.setSpeed(1.5);

        obj.obj.onclick = function () {
            obj.sound.pause();
            obj.sound.currentTime = 0;
            
            obj.anim.goToAndPlay(0, true);
            if(obj.timeout != null) {
                clearTimeout(obj.timeout);
            } 
            obj.timeout = setTimeout(() => {
                obj.sound.play();
                obj.timeout = null;
            }, obj.delay / 1.5);
        }
    }

    var title = document.getElementById('title');
    var titleAnim = lottie.loadAnimation({
        container: title,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'assets/title/data.json'
    })

    document.getElementById('nextBtn').onclick = parent.nextContent;
}