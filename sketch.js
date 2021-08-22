var runner,runner1;
var path,path1;
function preload(){
  runner1=loadAnimation("Runner-1.png","Runner-2.png");
  path1=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(path1);
  path.velocityY =4;
  path.scale =1.2;
  
  runner=createSprite(200,300,10,40);
  runner.addAnimation(runner1);
}

function draw() {
  background(180);
  runner=World.MouseX;

}
