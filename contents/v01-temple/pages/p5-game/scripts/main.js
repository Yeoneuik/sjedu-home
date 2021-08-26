const ansTable = {
    // 정답칸 갯수
    numAnswer: 2,
    // 선택지 갯수
    numObject: 6,
    // 선택지 이미지 경로
    srcObject: {
        0: 'assets/img/letter-1.svg',
        1: 'assets/img/letter-2.svg',
        2: 'assets/img/letter-3.svg',
        3: 'assets/img/letter-4.svg',
        4: 'assets/img/letter-5.svg',
        5: 'assets/img/letter-6.svg',
    },
    // 정답 이미지 경로
    srcAnswer: {
        0: 'assets/img/letter-1.svg',
        1: 'assets/img/letter-3.svg',
    },
    // 정답별 올바른 선택지 번호
    dict: {
        0: 0,
        1: 2
    },
    isFilled: {
        0: false,
        1: false
    }
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

function getAnswer(num) {
    return document.getElementById("answer" + num.toString());
}

function getObject(num) {
    return document.getElementById("object" + num.toString());
}

function isEnded() {
    for (var i = 0; i < ansTable.numAnswer; i++) {
        if (ansTable.isFilled[i] == false) return false;
    }
    return true;
}

function rightAnswer(i) {
    console.log("Right Answer!");
    var right = new Audio('assets/sound/right.mp3');
    right.currentTime = 0.2;
    right.play();
    right.remove();
    getObject(ansTable.dict[i]).style.visibility = "hidden"
    getAnswer(i).style.opacity = 1;
    ansTable.isFilled[i] = true;
    if (isEnded()) {
        setTimeout(function () {
            document.getElementById("endedDialog").style.display = "block";
            document.getElementById("endedFocus").style.display = "block";
        }, 2000)
    }
}

function wrongAnswer() {
    console.log("Wrong Answer!");
    var wrong = new Audio('assets/sound/wrong.mp3');
    wrong.currentTime = 0.4;
    wrong.play();
    wrong.remove();
}

function inAnswer() {
    for (let i = 0; i < ansTable.numAnswer; i++) {
        let clientBound = getAnswer(i).getBoundingClientRect();
        if (nowDragging.pos.clientX > clientBound.x &&
            nowDragging.pos.clientX < clientBound.right &&
            nowDragging.pos.clientY > clientBound.y &&
            nowDragging.pos.clientY < clientBound.bottom) {
            return i;
        }
    }
    return null;
}

function onDesktop() {
    for (let i = 0; i < ansTable.numObject; i++) {
        let nowObject = getObject(i);
        nowObject.ondragstart = function () { return false; }
        nowObject.onmousedown = function (e) {
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
            var ans = inAnswer();
            if (ans != null) {
                if (ansTable.dict[ans] == nowDragging.num)
                    rightAnswer(ans);
                else
                    wrongAnswer();
            }
            document.body.removeChild(nowDragging.obj);
        }
    }
}

function onMobile() {
    for (let i = 0; i < ansTable.numObject; i++) {
        let nowObject = getObject(i);
        nowObject.ontouchstart = function (e) {
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
            var ans = inAnswer();
            if (ans != null) {
                if (ansTable.dict[ans] == nowDragging.num)
                    rightAnswer(ans);
                else
                    wrongAnswer();
            }
            nowDragging.dragging = false;
            nowDragging.obj.remove();
        }
    }
}

window.onload = function () {
    for (let i = 0; i < ansTable.numAnswer; i++)
        getAnswer(i).src = ansTable.srcAnswer[i];

    for (let i = 0; i < ansTable.numObject; i++)
        getObject(i).src = ansTable.srcObject[i];

    if (Modernizr.touchevents) {
        onMobile();
    } else {
        onDesktop();
    }

    document.getElementById("endedDialog").onclick = parent.nextContent;
}


