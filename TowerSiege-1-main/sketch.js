const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, polygon, sling;
var platform1, platform2, platform3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;

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

    box1 = new Box(225, 360, 50, 50);
    box2 = new Box(275, 360, 50, 50);
    box3 = new Box(325, 360, 50, 50);
    box4 = new Box(375, 360, 50, 50);
    box5 = new Box(250, 300, 50, 50);
    box6 = new Box(300, 300, 50, 50);
    box7 = new Box(350, 300, 50, 50);
    box8 = new Box(250, 250, 50, 50);
    box9 = new Box(250, 200, 50, 50);
    box10 = new Box(250, 150, 50, 50);
    box11 = new Box(250, 100, 50, 50);
    box12 = new Box(250, 50, 50, 50);

    box13 = new Box(350, 210, 50, 50);
    box14 = new Box(400, 210, 50, 50);
    box15 = new Box(450, 210, 50, 50);
    box16 = new Box(350, 160, 50, 50);
    box17 = new Box(350, 110, 50, 50);
    box18 = new Box(350, 60, 50, 50);

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
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    sling.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        sling.attach(polygon.body);
    }
}