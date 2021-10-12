const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, polygon, sling;
var platform1, platform2, platform3;
var blocks = [];

function preload() {

}

function setup() {
    createCanvas(800, 700);
    background(230);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Ground(400, 700, 800, 50);
    platform1 = new Ground(300, 400, 200, 10);
    platform2 = new Ground(400, 250, 200, 10);
    platform3 = new Ground(600, 200, 200, 10);
    polygon = new Polygon(100, 600, 50, 50);
    sling = new Sling(polygon.body, { "x": 75, "y": 500 });

    for (var i = 100; i <= 700; i += 50) {
        blocks.push(new Box(i, 100, 50, 50));
    }

    for (var i = 100; i <= 700; i += 50) {
        blocks.push(new Box(i, 0, 50, 50));
    }
}

function draw() {
    background(230);
    Engine.update(engine);
    ground.display();
    platform1.display();
    platform2.display();
    platform3.display();
    polygon.display();
    sling.display();
    for (const block of blocks) {
        block.display();
    }
}

function mouseDragged() {

}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    sling.fly();
}