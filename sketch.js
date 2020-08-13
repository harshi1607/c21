var movingRect,fixedRect;
var ball,paddle

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50)
fixedRect.shapeColor="blue"
movingRect=createSprite(400, 200, 50, 50);
movingRect.shapeColor="blue"
ball=createSprite(200,200,20,20)
ball.shapeColor="yellow"
paddle=createSprite(400,200,10,100)
paddle.shapeColor="red"
}

function draw() {
  background("pink");
  movingRect.x=mouseX
  movingRect.y=mouseY 
  ball.velocityX=4
  paddle.velocityX=-4
  /*if(bounceOff(ball,paddle)){
    ball.shapeColor="green"
    paddle.shapeColor="blue"
  }*/
  bounceOff(ball,paddle)
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="black"
    fixedRect.shapeColor="black"
  }
  else{
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object2.y-object1.y<object1.height/2+object2.height/2
    &&object1.y-object2.y<object1.height/2+object2.height/2){
   
    return true
  }
  else{
    return false
  }
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2){
      console.log("bounceOff")
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
    }
    
    if(object2.y-object1.y<object1.height/2+object2.height/2
    &&object1.y-object2.y<object1.height/2+object2.height/2){
      object1.velocityY=object1.velocityY*(-1)
      object2.velocityY=object2.velocityY*(-1)
    
  }
}