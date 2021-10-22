window.onload = function () {
    var video = document.getElementById("vid");


    video.onended = parent.startGame();

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

