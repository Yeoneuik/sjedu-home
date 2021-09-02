// 컨텐츠 여기에 명시
const contents = [
    {
        src: 'pages/p1/index.html',
        game: [
            'pages/p1-game/index.html'
        ]
    },
    {
        src: 'pages/p2/index.html',
        game: [
            'pages/p2-game/index.html'
        ]
    },
    {
        src: 'pages/p3/index.html',
        game: [
            'pages/p3-game/index.html'
        ]
    },
    {
        src: 'pages/p4/index.html',
        game: [
            'pages/p3-game2/index.html'
        ]
    }
]

var nowPlaying = 0;
var nowGaming = null;

// Private Function
function setIframe(src) {
    var iframe = document.getElementById('contentFrame');
    iframe.src = src;
}

// Public Function
// Start next interaction(game) of the content now playing
function startGame() {
    var gamenow = contents[nowPlaying].game
    if(gamenow.length != 0) {
        if(nowGaming === null) {
            nowGaming = 0;
            setIframe(gamenow[nowGaming]);
        } else {
            nowGaming++;
            if(nowGaming >= gamenow.length) {
                nextContent();
            } else {
                setIframe(gamenow[nowGaming]);
            }
        }
    } else {
        nextContent();
    }
}

// Public Function
// Move to next video contents
function nextContent() {
    nowGaming = null;
    nowPlaying++;
    if (nowPlaying >= contents.length) {
        location.href = "index.html";
    } else {
        setIframe(contents[nowPlaying].src);
    }
}

// Public Function
// Move to previous video contents
function prevContent() {
    if (nowGaming != null) {
        nowGaming = null;
    } else if (nowPlaying > 0) {
        nowPlaying--;
    } else return;
    setIframe(contents[nowPlaying].src);
}

// 아래는 시스템 이외의것들
window.onload = function () {
    var elem = document.getElementById("videoContainer");

    // 풀스크린 코드
    document.getElementById("b_fullscreen").onclick = function() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    // 오른쪽 왼쪽 클릭시 iframe 내부 콘텐츠 바뀜
    document.getElementById("b_back").onclick = prevContent;
    document.getElementById("b_forward").onclick = nextContent;

    // ie 금지코드 시작
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert("인터넷 익스플로러는 세종시 온라인 공부방을 지원하지 않아요. 크롬으로 접속해주세요!");
        document.location.href = 'pororo_home.html';
    }
}