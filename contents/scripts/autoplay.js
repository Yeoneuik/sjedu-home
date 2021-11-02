function createPlaybackOverlay(video) {
    let overlay = document.createElement('div');
    overlay.classList.add('vid-overlay');

    let playBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    playBtn.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    playBtn.setAttribute('viewBox', '0 0 340 400');
    playBtn.innerHTML = '<polygon points="10,10 10,390 330,200" style="fill:white;"/>';

    playBtn.addEventListener('click', function() {
        console.log('Playing video...');
        overlay.style.display = "none";
        let promise = video.play();
        promise.then(function() {
            console.log('Button play success');
        }).catch(function() {
            console.log('Button play failed');
        })
    })
    
    overlay.appendChild(playBtn);
    video.parentNode.append(overlay);
}

function createCSS() {
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = `
    .vid-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 9;
        background-color: rgba(0,0,0,0.8);
    }
    
    .vid-overlay > svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    
        height: 30%;
    }
    
    .vid-overlay > svg:hover {
        filter: drop-shadow(0pt 0pt 10pt white);
    }';`;

    document.getElementsByTagName('head')[0].appendChild(style);
}

window.addEventListener('load', function() {
    createCSS();
    let vids = document.getElementsByClassName('vid-autoplay');

    for(let vid of vids) {
        if(vid.tagName != 'VIDEO' && vid.tagName != 'AUDIO') {
            console.log('Invalid vid-autoplay usage:', vid.tagName);
            continue;
        }

        vid.setAttribute('playsinline', '');
        vid.setAttribute('webkit-playsinline', '');

        if(vid.getAttribute('src') === null) {
            console.log("src not found");
            continue;
        }

        vid["autoplayStartFired"] = false;

        let start = function(e) {
            if(e.target.autoplayStartFired) return;
            else e.target.autoplayStartFired = true;

            let loading = document.getElementById('loading');
            if(loading === null) {
                console.log("Cannot find loading overlay. Ignoring...");
            } else {
                loading.style.display = "none";
            }

            let promise = e.target.play();

            if (promise === undefined) {
                window.alert("play() promise unsupported. Please use modern browser.");
                return;
            }
    
            promise.then(function() {
                console.log("Automatic playback success");
            }).catch(function() {
                console.log("Automatic playback failed. Creating play button...");
                createPlaybackOverlay(e.target);
            });
        }

        vid.addEventListener('canplaythrough', start);
        if (vid.readyState >= 4) {
            start({
                target: vid
            });
        }
    }
})