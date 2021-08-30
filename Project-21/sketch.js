var bullet, wall;
var speed, weight, thickness;
var damage;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52);

  damage = (0.5 * weight * (speed ** 2)) / (thickness ** 3);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "lightgray";

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = (80, 80, 80);

  (function check() {
    wall.shapeColor = damage < 10 ? "green" : "red";
  })();
}

function draw() {
  background(255, 255, 255);

  bullet.collide(wall);

  drawSprites();
}