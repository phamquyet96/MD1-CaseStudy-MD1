let canvas= document.getElementById("my-canvas");
let ctx= canvas.getContext("2d");


let ball = new Ball(100, 100, 20, 'red')
let dx=10;
let dy=5;
let score =document.getElementById("scores");

function ballmove1() {
    if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
        dx = -dx;
    }
    if (ball.y < ball.radius) {
        dy = -dy;
    } else if (ball.y +ball.radius == canvas.height) {
        alert("GAME OVER!");
        ball.x=100;
        ball.y=100;
        point = 0;
        score.innerHTML="SCORE : 0";
    }
    ball.x += dx;
    ball.y += dy;
}

let rect = new Rectangle(175, 485, 150, 15, "blue", 30);
document.addEventListener("keyup", function(event){
    // rect.move();
    // rect.draw();
    if(event.keyCode==37 && rect.x>=0){
        rect.x -= rect.speed;
    } else if(event.keyCode==39 && rect.x<=canvas.width-rect.width){
        rect.x += rect.speed;
    }
})

function ballvsrect(){
    if(ball.x+ball.radius>rect.x && ball.x<rect.x+rect.width && ball.y+ball.radius>canvas.height-rect.height){
        dy= -dy;
    }
}



let point=0;
function Score(){
    if(ball.x+ball.radius>rect.x && ball.x<rect.x+rect.width && ball.y+ball.radius>canvas.height-rect.height){
        point++;
        score.innerHTML="SCORE: " + point;
    }
}

function main() {
    ball.move();
    ball.draw();
    rect.draw();
    ballmove1();
    ballvsrect();
    Score();
    requestAnimationFrame(main)
}
main();