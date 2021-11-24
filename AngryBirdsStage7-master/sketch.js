const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;

const date = new Date();
const hours = date.getHours();

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    nightBackground = loadImage("sprites/bg2.jpg");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body, { x: 200, y: 50 });
}

function gameOverScreen() {
    background("black");
    push();
    textSize(60);
    fill("lightgreen");
    text("You Won!", 200, 200);
    pop();
}
function draw() {
    if (hours >= 19 || hours <= 6) {
        document.body.style.backgroundColor = "black";
        background(nightBackground);
    } else {
        document.body.style.backgroundColor = "white";
        background(backgroundImg);
    }

    if (score === 2) {
        gameState = "gameover";
    }

    if (gameState === "gameover") {
        gameOverScreen();
        return null;
    }

    textSize(18);
    text(`Score: ${score}`, 1100, 50);

    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
}

function mouseDragged() {
    if (gameState != "gameover") {
        if (gameState !== "launched") {
            Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
        }
    }
}

function mouseReleased() {
    if (gameState != "gameover") {
        slingshot.fly();
        gameState = "launched";
    }
}

function keyPressed() {
    if (gameState != "gameover") {
        if (keyCode === 32) {
            slingshot.attach(bird.body);
            gameState = "onSling";
        }
    }
}
