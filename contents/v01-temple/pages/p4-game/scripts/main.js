window.onload = function() {
    var dish01 = document.getElementById("dish01");
    var dish02 = document.getElementById("dish02");
    var dish03 = document.getElementById("dish03");
    var dish04 = document.getElementById("dish04");
    var dish05 = document.getElementById("dish05");

    var anim01 = lottie.loadAnimation( {
        container: dish01,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets7.lottiefiles.com/packages/lf20_mpkkcjua.json'
    })
    
    var anim02 = lottie.loadAnimation( {
        container: dish02,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets6.lottiefiles.com/packages/lf20_9lcf8q7f.json'
    })
    
    var anim03 = lottie.loadAnimation( {
        container: dish03,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets5.lottiefiles.com/packages/lf20_qn5bbv3q.json'
    })
    
    var anim04 = lottie.loadAnimation( {
        container: dish04,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets5.lottiefiles.com/packages/lf20_8dcynmnb.json'
    })
    
    var anim05 = lottie.loadAnimation( {
        container: dish05,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: 'https://assets4.lottiefiles.com/packages/lf20_g7rfzppo.json'
    })

    dish01Sound = new Audio('assets/audio/eat.mp3');
    dish02Sound = new Audio('assets/audio/drink.mp3')

    anim01.setSpeed(1);

    // 호버시 재생
    // book.addEventListener('mouseenter', function() {
    //     anim.play();
    // })

    // book.addEventListener('mouseleave', function() {
    //     anim.stop()
    // })

    dish01.onclick = function() {
        dish01Sound.pause();
        dish01Sound.currentTime = 0;
        anim01.goToAndPlay(0, true);
        setTimeout(() => dish01Sound.play(), 0);
    }
    
     dish02.onclick = function() {
        dish01Sound.pause();
        dish01Sound.currentTime = 0;
        anim02.goToAndPlay(0, true);
        setTimeout(() => dish01Sound.play(), 0);
    }
     
     dish03.onclick = function() {
        dish01Sound.pause();
        dish01Sound.currentTime = 0;
        anim03.goToAndPlay(0, true);
        setTimeout(() => dish01Sound.play(), 0);
    }
     
     dish04.onclick = function() {
        dish01Sound.pause();
        dish01Sound.currentTime = 0;
        anim04.goToAndPlay(0, true);
        setTimeout(() => dish01Sound.play(), 0);
    }
     
     dish05.onclick = function() {
        dish02Sound.pause();
        dish02Sound.currentTime = 0;
        anim05.goToAndPlay(0, true);
        setTimeout(() => dish02Sound.play(), 0);
    }
     
     document.getElementById('nextBtn').onclick = parent.nextContent;
}