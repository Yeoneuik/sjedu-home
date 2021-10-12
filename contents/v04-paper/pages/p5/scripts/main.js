window.onload = function () {
    var video = document.getElementById("vid");
    var snack = document.getElementById("snack");
    var button = document.getElementById("button");


    video.onended = function() {
        snack.style.display = "block";
        snack.onclick = parent.startGame;
        button.play();
        setTimeout(parent.nextContent, 6000);
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

