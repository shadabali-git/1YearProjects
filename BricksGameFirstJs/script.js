const content=document.getElementById('content');
const main=document.getElementById('main');
const startbtn=document.getElementById('startbtn');
const leftbtn=document.getElementById('leftbtn');
const rightbtn=document.getElementById('rightbtn');
const  replaybtn=document.getElementById('replaybtn');
const replaydiv=document.getElementById('replaydiv');






function start(){
  
   
     startbtn.style.display="none";
     
    
    if(content.childElementCount){
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

//    ballPositionX=0;
//    ballPositionY
      
  for(let i=0;i<50;i++){
    let element=document.createElement('li');
    element.style.position="relative";
    if (window.innerWidth <= 600) {

        element.style.width="50px";
        element.style.height="20px";
        element.style.background="#fff";
        startbtn.style.display="none";

  
    }
    else{
      
       
       element.style.width="100px";
       element.style.height="50px";
       element.style.background="#808080";
    }
        
    
    content.appendChild(element);
  }

updateBallPosition();

}


const Bar=document.getElementById('bar');
let currentPosition=0;
let step=20;

if(window.innerWidth<= 700){
   
    
   
    leftbtn.addEventListener("touchstart",()=>{
        

        if(currentPosition-step >=0){
        currentPosition -= step;
        Bar.style.left = currentPosition + "px";
        }
        // alert("okey");

    })


    rightbtn.addEventListener("touchstart",()=>{
        if(currentPosition+step+Bar.clientWidth <=window.innerWidth)
        currentPosition += step;
        Bar.style.left = currentPosition + "px";

    })


}
     



else{

document.addEventListener("keydown", function(event) {
    // Check if the pressed key is left or right arrow


    let windowWidth=window.innerWidth;

   
    
    // console.log(windowWidth);
    if (event.key === "ArrowLeft" &&  currentPosition - step >= 0) {
        // Move the div to the left
        currentPosition -= step;
        Bar.style.left = currentPosition + "px";
    } else if (event.key === "ArrowRight" && currentPosition+step+Bar.clientWidth <=windowWidth) {
        // Move the div to the right
        currentPosition += step;
        Bar.style.left = currentPosition + "px";
    }
   
});
}

let ball = document.getElementById("ball");

let bricks=document.getElementsByTagName('li');


let ballPositionX = 0;
let ballPositionY = main.clientHeight-100;
let ballSpeedX = 4;
let ballSpeedY = 4;
function updateBallPosition() {
    ballPositionX += ballSpeedX;
    ballPositionY += ballSpeedY;
   
    if(ballPositionY+ball.clientHeight >(main.clientHeight)){
        console.log("game over");
        replaydiv.classList.toggle("hidden");
        replaydiv.classList.toggle("flex");
        
        // startbtn.style.display="block";

        return;
    }
   
    if (ballPositionX <= 0 || ballPositionX + ball.clientWidth >= main.clientWidth) {
        ballSpeedX = -ballSpeedX;
    }
    if(ballPositionY<=0){
        ballSpeedY =-ballSpeedY;
    }
    
    if (ballPositionY+ball.clientHeight >= main.clientHeight-10) {
        if((ball.clientWidth+ballPositionX <= currentPosition+step+Bar.clientWidth) && (ball.clientWidth+ballPositionX>=currentPosition)){

            ballSpeedY =-ballSpeedY;

        }
       
    }

    // Check collisions with bricks
    for (let i = 0; i < bricks.length; i++) {
        let brick = bricks[i];
        if (checkCollision(ball, brick)) {
            // Remove the brick from the DOM
            // brick.parentNode.removeChild()
            brick.style.background="transparent";
        
            brick.style.top="-600px";

            // Reverse the ball's direction
            ballSpeedY = -ballSpeedY;
        }
    }

    ball.style.left = ballPositionX + "px";
    ball.style.top = ballPositionY + "px";

    requestAnimationFrame(updateBallPosition);
}

function checkCollision(ball, brick) {
    return ballPositionX < brick.offsetLeft + brick.clientWidth &&
           ballPositionX + ball.clientWidth > brick.offsetLeft &&
           ballPositionY < brick.offsetTop + brick.clientHeight &&
           ballPositionY + ball.clientHeight > brick.offsetTop;
}


replaybtn.addEventListener("click",()=>{

      location.reload();
      

})