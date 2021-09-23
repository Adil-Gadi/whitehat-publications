
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, basket;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(200, 200);

  ground = new Ground(0, 700, 1600, 100);

  basket = new Basket(600, 550);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(245);

  ground.display();
  basket.display();
  paper.display();

  if (keyCode === UP_ARROW) Body.applyForce(paper.body, paper.body.position, { "x": 2, "y": 2 })

  Engine.update(engine);
  drawSprites();

}
