var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = (80, 80, 80);

  deformation = (0.5 * speed * speed * weight) / 22500;

  (function check() {
    if (deformation < 100) {
      car.shapeColor = "green";
    } else if (deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    } else car.shapeColor = "red"

    console.log(deformation);
  })();
}

function draw() {
  background(255, 255, 255);
  drawSprites();
}