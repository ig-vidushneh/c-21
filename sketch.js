var fixedrect,movingrect
var object21, object22
function setup() {
  createCanvas(windowWidth,windowHeight);
  movingrect=createSprite(800, 200, 80, 20);
  fixedrect=createSprite(400,200,50,50);
  object21=createSprite(500,300,70,20);
  object22=createSprite(30,300,70,20);
  object21.velocityX=-1;
  object22.velocityX=1;
}

function draw() {
  background(0); 
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if (isTouching(movingrect,fixedrect)) 
  {
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  else
  {
    movingrect.shapeColor="pink"
    fixedrect.shapeColor="pink"
  }
  bounceOff(object21,object22)
  if (isTouching(object21,object22)) 
  {
    object22.shapeColor="red"
    object21.shapeColor="red"
  }
  drawSprites();
}