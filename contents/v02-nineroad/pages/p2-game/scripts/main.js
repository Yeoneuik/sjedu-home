const ansTable = {
    // 정답칸 갯수
    numAnswer: 3,
    // 선택지 갯수
    numObject: 3,
    // 선택지 이미지 경로
    srcObject: {
        0: 'assets/img/moveableLog.svg',
        1: 'assets/img/moveableLog.svg',
        2: 'assets/img/moveableLog.svg',
    },
    isConsumed: {
        0: false,
        1: false,
        2: false
    },
    // 정답 이미지 경로
    srcAnswer: [
        'assets/img/Log_01.svg',
        'assets/img/Log_02.svg',
        'assets/img/Log_03.svg',
    ],
    filled: 0
}

// 전역 드래그 기록 객체
var nowDragging = {
    dragging: false,
    num: null,
    obj: null,
    pos: null,
    offset: {
        x: null,
        y: null
    }
}

var answerBox = null;

function getObject(num) {
    return document.getElementById("object" + num.toString());
}

function isEnded() {
    return ansTable.filled >= ansTable.numObject;
}

function rightAnswer(i) {
    console.log("Right Answer!");

    var right = new Audio('assets/sound/right.mp3');
    right.currentTime = 0.2;
    right.play();
    right.remove();

    getObject(i).style.opacity = "20%";
    ansTable.isConsumed[i] = true;

    ansTable.filled++;
    answerBox.style.backgroundImage = 'url("' + ansTable.srcAnswer[ansTable.filled-1] + '")';
    
    if (isEnded()) {
        setTimeout(function () {
            document.getElementById("endedDialog").style.display = "block";
            document.getElementById("endedFocus").style.display = "block";
        }, 2000)
    }
}

function inAnswer() {
    let clientBound = answerBox.getBoundingClientRect();
        if (nowDragging.pos.clientX > clientBound.x &&
            nowDragging.pos.clientX < clientBound.right &&
            nowDragging.pos.clientY > clientBound.y &&
            nowDragging.pos.clientY < clientBound.bottom) {
            return true;
        }
    return false;
}

function onDesktop() {
    for (let i = 0; i < ansTable.numObject; i++) {
        let nowObject = getObject(i);
        nowObject.ondragstart = function () { return false; }
        nowObject.onmousedown = function (e) {
            if(ansTable.isConsumed[i]) return;
            e.preventDefault();

            var grabLocation = e;

            nowDragging.num = i;
            nowDragging.dragging = true;

            nowDragging.offset.x = this.offsetWidth / 2;
            nowDragging.offset.y = this.offsetHeight / 2;

            nowDragging.obj = new Image();
            nowDragging.obj.src = ansTable.srcObject[i];
            nowDragging.obj.style.width = this.offsetWidth + 'px';
            nowDragging.obj.style.height = this.offsetHeight + 'px';
            nowDragging.obj.style.position = 'fixed';
            nowDragging.obj.style.cursor = 'grabbing';
            nowDragging.obj.style.left = grabLocation.clientX - nowDragging.offset.x + 'px';
            nowDragging.obj.style.top = grabLocation.clientY - nowDragging.offset.y + 'px';

            nowDragging.pos = grabLocation;

            document.body.appendChild(nowDragging.obj);
        }
    }

    document.onmousemove = function (e) {
        if (nowDragging.dragging) {
            var grabLocation = e;
            nowDragging.obj.style.left = grabLocation.clientX - nowDragging.offset.x + 'px';
            nowDragging.obj.style.top = grabLocation.clientY - nowDragging.offset.y + 'px';
            nowDragging.pos = e;
        }
    }

    document.onmouseup = function (e) {
        if (nowDragging.dragging) {
            nowDragging.dragging = false;
            if (inAnswer()) rightAnswer(nowDragging.num);
        }
        nowDragging.dragging = false;
        nowDragging.obj.remove();
    }
}

function onMobile() {
    for (let i = 0; i < ansTable.numObject; i++) {
        let nowObject = getObject(i);
        nowObject.ontouchstart = function (e) {
            if(ansTable.isConsumed[i]) return;
            e.preventDefault();

            var grabLocation = e.touches[0];

            nowDragging.num = i;
            nowDragging.dragging = true;

            nowDragging.offset.x = this.offsetWidth / 2;
            nowDragging.offset.y = this.offsetHeight / 2;

            nowDragging.obj = new Image();
            nowDragging.obj.src = ansTable.srcObject[i];
            nowDragging.obj.style.width = this.offsetWidth + 'px';
            nowDragging.obj.style.height = this.offsetHeight + 'px';
            nowDragging.obj.style.position = 'absolute';
            nowDragging.obj.style.left = grabLocation.clientX - nowDragging.offset.x + 'px';
            nowDragging.obj.style.top = grabLocation.clientY - nowDragging.offset.y + 'px';

            nowDragging.pos = grabLocation;

            document.body.appendChild(nowDragging.obj);
        }

        nowObject.ontouchmove = function (e) {
            var grabLocation = e.touches[0];
            nowDragging.obj.style.left = grabLocation.clientX - nowDragging.offset.x + 'px';
            nowDragging.obj.style.top = grabLocation.clientY - nowDragging.offset.y + 'px';

            nowDragging.pos = grabLocation;
        }

        nowObject.ontouchend = function (e) {
            if (nowDragging.dragging) {
                nowDragging.dragging = false;
                if (inAnswer()) rightAnswer(nowDragging.num);
            }
            nowDragging.dragging = false;
            nowDragging.obj.remove();
        }
    }
}

window.onload = function () {
    for (let i = 0; i < ansTable.numObject; i++)
        getObject(i).src = ansTable.srcObject[i];
    
    answerBox = document.getElementById('answerBox');

    if (Modernizr.touchevents) {
        onMobile();
    } else {
        onDesktop();
    }

    document.getElementById("endedDialog").onclick = parent.nextContent;
}


