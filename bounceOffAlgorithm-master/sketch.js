var fixedRect, movingRect, rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(400,400,50,60);

  rect4 = createSprite(300,300,50,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
if (collides(movingRect, fixedRect)) {
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";
} else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
}

  drawSprites();
}