var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);

  movingRect = createSprite(400,200,50,50);
}

function collides(object1, object2, callback) {
  if (
    object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
  ) {
    callback(true);
  } else callback(false)
}

function randomNumber(number) {
  return Math.round(Math.random() * number);
}

function reduce(number) {
  return 0.1 * number;
}

function draw() {
  background(200,200,200);

  fixedRect.velocityY = 0.5;
  movingRect.velocityX = 0.5;

  collides(movingRect, fixedRect, (result) => {
    if (result === true) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
      fixedRect.velocityX += randomNumber(2) === 1 ? reduce(randomNumber(3)) : -reduce(randomNumber(3));
      fixedRect.velocityY += randomNumber(2) === 1 ? reduce(randomNumber(3)) : -reduce(randomNumber(3));
      movingRect.velocityX += randomNumber(2) === 1 ? reduce(randomNumber(3)) : -reduce(randomNumber(3));
      movingRect.velocityY += randomNumber(2) === 1 ? reduce(randomNumber(3)) : -reduce(randomNumber(3));
    } else {
      movingRect.shapeColor = "green"; fixedRect.shapeColor = "green";

      // movingRect.x = fixedRect.x;
      // movingRect.y = fixedRect.y;
    }
  });

  drawSprites();
}