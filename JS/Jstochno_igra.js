let game={
    W : 500,
    H : 500,
    bag:'#F5F0E1',
}

let canvas = document.getElementById('canvas');
canvas.width = game.W;
canvas.height = game.H;
let canvasC = canvas.getContext('2d');


let counti = 0;
let count = 0;

let Boll = {
    color: 'orange',
    x: 100,
    y: 80,
    size:20,
    xD:5,
    yD:8,
}

let res_t = {
	colors: 'Purple',
    x: game.W / 2 ,
    y: 460,
    size_x:80,
    size_y:20,
    xR:5,
}

function drboll(ball){
    canvasC.fillStyle = ball.color;
    canvasC.beginPath();
    canvasC.arc(ball.x,ball.y,ball.size/2,0,2*Math.PI);
    canvasC.fill();
}

function drrest(res){
    canvasC.fillStyle = res_t.colors;
    canvasC.beginPath();
    canvasC.rect(res_t.x,res_t.y,res_t.size_x,res_t.size_y);
    canvasC.fill();
}

function shot(a){
    canvasC.fillStyle = res_t.colors;
    canvasC.beginPath();
    canvasC.rect(res_t.x,res_t.y,res_t.size_x,res_t.size_y);
    canvasC.fill();
}

function drouFrame(){
    canvasC.clearRect(0,0,game.W,game.H);
    drawBackground();
    drboll(Boll);
    drrest();
}

function drawBackground(){
    canvasC.fillStyle = game.bag;
    canvasC.fillRect(0,0,game.W,game.H);
}

function drboll2(ball){
    ball.x += Boll.xD;
    ball.y += Boll.yD;
    if(ball.y < 10){
        Boll.yD = -Boll.yD;
    }
    if(ball.y > game.H -10){
        Boll.yD = -Boll.yD;
        count += 1;
        
    }
    if(ball.x > game.W-10){
        Boll.xD = -Boll.xD;
    }
    if(ball.x < 10){
        Boll.xD = -Boll.xD;
    }
    if(ball.x < 500 - res_t){
        Boll.yD = -Boll.yD;
    }
}

function drawScore() {
    canvasC.rect = (600,0,10,20);
    canvasC.fillStyle = "black";
    canvasC.fillText("Score: " + count, 8, 20);
}

function play2(){
	drouFrame()
    drboll2(Boll);
    requestAnimationFrame(play2);
}

play2();