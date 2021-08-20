const { Engine, Bodies, World } = Matter;

var ball, ground, myEngine, myWorld;

function setup() {
  createCanvas(500,500);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ball = Bodies.circle(250,250,50, { "isStatic": true });
  World.add(myWorld, ball);
  console.log(ball);
}

function draw() {
  background(50,50,50);

  Engine.update(myEngine);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}