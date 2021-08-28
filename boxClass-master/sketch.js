const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(260, 300, 50, 50);
    box2 = new Box(240, 200, 50, 50);
    box3 = new Box(220, 100, 50, 50);

    ground = new Ground(200, 390, 400, 50, 255);
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
}