window.onload = function () {
    var video = document.getElementById("vid");

    video.onended = function() {
        parent.startGame();
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

