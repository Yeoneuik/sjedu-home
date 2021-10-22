window.onload = function () {
    var video = document.getElementById("vid");
    var clam = document.getElementById("clam");
    var button = document.getElementById("button");

    narr = new Audio();

    narr.src = "assets/narr.mp3";

    button.onclick = parent.nextContent;

    video.onended = function() {
        clam.style.display = "block";
        button.play();
        setTimeout(parent.nextContent, 11000);
        narr.play();
    }

    video.oncanplaythrough = function() {
        document.getElementById("loading").style.display = "none";
    }

    video.onplaying = function() {
        document.getElementById("loading").style.display = "none";
    }
}

