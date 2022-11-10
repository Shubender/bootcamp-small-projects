var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 3;

ctx.beginPath();
ctx.arc(200, 65, 50, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 116);
ctx.lineTo(200, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 107);
ctx.lineTo(200, 165);
ctx.lineTo(280, 107);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 330);
ctx.lineTo(200, 250);
ctx.lineTo(280, 330);
ctx.stroke();

var canvasBig = document.getElementById("canvasBig");
var ctxBig = canvasBig.getContext("2d");

var positionX = 0;
var positionY = 0;

ctxBig.drawImage(canvas, positionX, positionY);
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 39) {
        ctxBig.clearRect(positionX, positionY, 400, 400);
        ctxBig.drawImage(canvas, positionX, positionY);
        positionX += 5;
    }

    if (e.keyCode === 37) {
        ctxBig.clearRect(positionX, positionY, 400, 400);
        ctxBig.drawImage(canvas, positionX, positionY);
        positionX -= 5;
    }

    if (e.keyCode === 38) {
        ctxBig.clearRect(positionX, positionY, 400, 400);
        ctxBig.drawImage(canvas, positionX, positionY);
        positionY -= 5;
    }

    if (e.keyCode === 40) {
        ctxBig.clearRect(positionX, positionY, 400, 400);
        ctxBig.drawImage(canvas, positionX, positionY);
        positionY += 5;
    }

});

// get coordinates

var X = document.getElementById("X");
var Y = document.getElementById("Y");

function pos(e) {
    X.value = e.pageX;
    Y.value = e.pageY;
}

addEventListener("mousemove", pos, false);
