window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");
    var button = document.getElementById("button");


    video.onended = parent.startGame();

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

