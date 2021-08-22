const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(200, 100, 20, {
        "restitution": 1.2
    });

    var groundOptions = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 200, 20, groundOptions);
    World.add(world, ground);
    World.add(world, ball);

    console.log(ground);
    console.log(ball);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, ball.circleRadius, ball.circleRadius);

}