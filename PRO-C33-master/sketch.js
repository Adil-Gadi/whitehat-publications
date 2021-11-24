let Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

let particles = [];
let plinkos = [];
const divisions = [];

let divisionHeight = 300;
let score = 0;
let particle;
let turn = 0;
let gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));

  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}



function draw() {
  background("black");
  textSize(20)
  textAlign(LEFT);
  text("Score: " + score, 20, 30);
  for (let i = 0; i < 800; i += (800 / 10)) {
    let input;
    textSize(25)
    if (i > 3 * 80 && i < 7 * 80) text("100", i + 20, 600)
    else if (i >= 7 * 80 && i <= 10 * 80) text("200", i + 20, 600)
    else text("500", i + 20, 600)
  }
  Engine.update(engine);

  push();
  fill("yellow");
  rectMode(CORNER);
  rect(0, 480, 800, 10);
  pop();

  if (particle) {
    particle.display();

    const { x, y } = particle.body.position;

    function def(x) {
      score += x;
      particle = null;
      if (turn >= 5) gameState = "end"
    }

    if (y > 760) {
      if (x < 300) {
        score += 500;
        particle = null;
        if (turn >= 5) gameState = "end"
      } else if (x >= 300 && x < 600) {
        def(100);        
      } else {
        def(200);
      }
    }
  }

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  // if (frameCount % 60 === 0) {
  //   particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10));
  //   score++;
  // }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }

  if (gameState === "end") text("Game Over", 400, 400);
}

function mousePressed() {
  if (gameState !== "end") {
    turn++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}