/*let canvas = document.getElementById('canvas');
let canvasC = canvas.getContext('2d');
let canvasW = 300;
let canvasH = 300;
canvas.wigth = canvasW;
canvas.height = canvasH;


function osnova(){
    canvasC.fillStyle = 'gray';
    canvasC.fillRect(0 , 0 , canvasW , canvasH );
{
function kvadrat(){
    canvasC.fillStyle = 'red';
    canvasC.fillRect(100 , 100 , 20 , 20 );
    canvasC.fillStyle = 'yellow';
    canvasC.fillRect(100 , 100 , 20 , 20 );
}


function treygol() {
    canvasC.strokeStyle = 'yellow'
    canvasC.lineWidth = 5;
    canvasC.beginPath();
    canvasC.moveTo(150, 100);
    canvasC.lineTo(200,150);
    canvasC.lineTo(200,50);
    canvasC.closePath();
    canvasC.stroke();
}


function krug(){
    canvasC.fillStyle = 'red';
    canvasC.strokeStyle = 'white'
    canvasC.lineWidth = 5;
    canvasC.beginPath();
    canvasC.arc(150 , 100 , 75 , 0 , 2 * Math.PI)
    canvasC.closePath();
    canvasC.fill();
    canvasC.stroke();
}


function micha(){
    let r = 100;
    let f = ["white", "red", "yellow", 'orange','green','pink','violet','Purple','olive','lilac','salmon','plum','coral','lavender'];
for(let i = 1 ; i <  8 ; i ++){
    d=Math.floor(Math.random(0,13)*10)
    canvasC.fillStyle = f[d];
    canvasC.beginPath();
    canvasC.arc(150 , 140 , r , 0 , 2 * Math.PI)
    canvasC.closePath();
    canvasC.fill();
    canvasC.stroke();
    r = r - 15;
    console.log(d);
}
}



let canvas = document.getElementById('canvas');
let canvasC = canvas.getContext('2d');
let canvasW = 300;
let canvasH = 300;
canvas.wigth = canvasW;
canvas.height = canvasH;
function draw() {
  if (canvas.getContext){
    canvasC.strokeRect(12,12,185,170);
    canvasC.strokeRect(19,19,170,155);
    canvasC.strokeRect(53,53,49,33);
    canvasC.strokeRect(53,119,49,25);
    canvasC.strokeRect(135,53,49,33);
    canvasC.strokeRect(135,119,25,49);

    canvasC.beginPath();
    canvasC.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
    canvasC.lineTo(31,37);
    canvasC.fill();

    for(let i=0;i<8;i++){
      canvasC.fillRect(51+i*16,35,4,4);
    }

    for(i=0;i<6;i++){
      canvasC.fillRect(115,51+i*16,4,4);
    }

    for(i=0;i<8;i++){
      canvasC.fillRect(51+i*16,99,4,4);
    }

    canvasC.beginPath();
    canvasC.moveTo(83,116);
    canvasC.lineTo(83,102);
    canvasC.bezierCurveTo(83,94,89,88,97,88);
    canvasC.bezierCurveTo(105,88,111,94,111,102);
    canvasC.lineTo(111,116);
    canvasC.lineTo(106.333,111.333);
    canvasC.lineTo(101.666,116);
    canvasC.lineTo(97,111.333);
    canvasC.lineTo(92.333,116);
    canvasC.lineTo(87.666,111.333);
    canvasC.lineTo(83,116);
    canvasC.fill();

    canvasC.fillStyle = "white";
    canvasC.beginPath();
    canvasC.ellipse(91,101, 4, 5, 0, 0, 2 * Math.PI);
    canvasC.ellipse(103,101, 4, 5, 0, 0, 2 * Math.PI);
    canvasC.fill();

    canvasC.fillStyle = "black";
    canvasC.beginPath();
    canvasC.arc(101,102,2,0,Math.PI*2,true);
    canvasC.fill();

    canvasC.beginPath();
    canvasC.arc(89,102,2,0,Math.PI*2,true);
    canvasC.fill();
  }
}

draw()
*/

let canvas = document.getElementById('canvas');
let canvasW = 500;
let canvasH = 500;
canvas.width = canvasW;
canvas.height = canvasH;
let canvasC = canvas.getContext('2d');
canvasC.fillStyle = '#F5F0E1'
canvasC.fillRect(0, 0, canvasW, canvasH);

let Boll = {
  color: 'orange',
  x: 100,
  y: 80,
  size:20,
}

function drboll(ball){
canvasC.fillStyle = ball.color;
canvasC.beginPath();
canvasC.arc(ball.x,ball.y,ball.size/2,0,2*Math.PI);
canvasC.fill();
}

function drboll2(ball){
  ball.x += 3;
  ball.y += 5;
}



function drouFrame(){
  canvasC.clearRect(0,0,canvasW,canvasH);
  drawBackground();
  drboll(Boll);
}

function drawBackground(){
  canvasC.fillStyle = '#F5F0E1';
  canvasC.fillRect(0,0,canvasW,canvasH);
}

function play(){
  drboll(Boll);
  drboll2(Boll);
  requestAnimationFrame(play);
}

function play2(){
  drouFrame()
  drboll2(Boll);
  requestAnimationFrame(play2);
}

play2();
