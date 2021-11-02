const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;
var divisions = [];
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 800, 482, 50);

  for (let i = 0; i <= 480; i += 80) {
    divisions.push(new Division(i, 800 - 300 / 2, 10, 300));
  }

  for (let i = 40; i <= 480; i += 50) {
    plinkos.push(new Plinko(i,75));
  }

  for (let i = 15; i <= 480-10; i += 50) {
    plinkos.push(new Plinko(i,175));
  }

  for (let i = 40; i <= 480; i += 50) {
    plinkos.push(new Plinko(i,275));
  }

  for (let i = 15; i <= 480-10; i += 50) {
    plinkos.push(new Plinko(i,375));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  ground.display();

  for (const item of divisions) {
    item.display();
  }

  if (frameCount % 60 === 0) {
    particles.push(new Particle(240, 10));
  }

  for (const item of plinkos) {
    item.display();
  }

  for (const item of particles) {
    item.display();
  }
}