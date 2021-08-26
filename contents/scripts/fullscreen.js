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

    // ie 금지코드 시작
    var agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        alert("인터넷 익스플로러는 세종시 온라인 공부방을 지원하지 않아요. 크롬으로 접속해주세요!");
        document.location.href = '../../index.html';
    }
}