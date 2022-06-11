

/*
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;

var lives = 3;



var bricks = [];
for(var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight")
{
rightPressed = true;
}
    else if (e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight")
    {
        rightPressed = false;
    }
else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
}
}


function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width)
    {
        paddleX = relativeX - paddleWidth/2;
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks [c][r];
            if(b.status == 1) 
            if(x > b.x && x< b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
            }
        }
    }
}

/*
if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy
}
*/

/*
if(y + dy < 0) {
    dy = -dy;
}
if(y + dy > canvas.height) {
    dy = -dy;
}
*/
/*
function draw() {
    ctx.clearRect(0, 0, canvas.width,
        canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
*/

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1) {
          var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
 
    /*
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
*/
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
       if(x > paddleX && x < paddleX + paddleWidth) {
    
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            if (y = y - paddleHeight) {
                dy= -dy;
            }
        }
        /*
        else{
        alert("GAME OVER BRO");
        document.location.reload();
        clearInterval(interval);
        }
        */
       lives--;
       if(!lives) {
           alert("GAME OVER");
           document.location.reload();
           
       }
       else {
           x = canvas.width/2;
           y = canvas.height-30;
           dx = 2;
           dy = -2;
           paddleX = (canvas.width-paddleWidth)/2;
       }
    }
        
    
}
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -=7;
    
    }
    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}
draw();





function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            bricks[c][r].x = 0;
            bricks[c][r].y = 0;
            ctx.beginPath();
            ctx.rect(0, 0, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks [c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN BRO, CONGRATS");
                        document.location.reload();
                        
                    
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}