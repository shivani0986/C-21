var fixedRect, movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400, 200, 70, 100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400, 600, 80, 110);
  movingRect.shapeColor="green";

  fixedRect.velocityY=1;
  movingRect.velocityY=-1;
}

function draw() {
  background(255,255,255);  


bounceoff(movingRect, fixedRect);

  drawSprites();
}

