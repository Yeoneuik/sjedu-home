window.onload = function () {
    var video = document.getElementById("vid");


    video.onended = function() {
        parent.location.href = '../../index.html';
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}