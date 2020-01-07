let canvas;
let ctx;
let ballOne;
let ballX = 90;
let ballY = 90;
let xVelocity = 2;
let yVelocity = 2;
let color = "#ccff99";
let ballWidth = 15;



window.onload = function () {
    canvas = document.getElementById("test");
    ctx = canvas.getContext("2d");
    ballOne = canvas.getContext("2d");
    setInterval(draw, 1);
}


function draw() {
        console.log(i)
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = color;

        ctx.arc(ballX + i, ballY + i, ballWidth, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

    ballX += xVelocity;
    ballY += yVelocity;

    if (ballX - ballWidth <= 0) {
        xVelocity = -xVelocity;
    }

    if (ballX + ballWidth >= canvas.width) {
        xVelocity = -xVelocity;
    }

    if (ballY - ballWidth <= 0) {
        yVelocity = -yVelocity;
    }

    if (ballY + ballWidth >= canvas.height) {
        yVelocity = -yVelocity;
    }
}
