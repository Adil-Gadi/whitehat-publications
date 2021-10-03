const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy;
var mango1, mango2, mango3, mango4, mango5, chain;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600, 350);
	ground = new Ground(400, 700, 800, 20);
	stone = new Stone(120, 500);
	boy = new Boy(200, 500);
	mango1 = new Mango(400, 300);
	mango2 = new Mango(600, 300);
	mango3 = new Mango(500, 200);
	mango4 = new Mango(700, 100);
	mango5 = new Mango(750, 200);
	chain = new Chain(stone.body, { "x": 150, "y": 450 });

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(220);

	if (keyCode === 32) {
		Body.setPosition(stone.body, { "x": 120, "y": 500 });
		
	}

	detectCollision(mango1, stone);
	detectCollision(mango2, stone);
	detectCollision(mango3, stone);
	detectCollision(mango4, stone);
	detectCollision(mango5, stone);

	tree.display();
	ground.display();
	boy.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	chain.display();

	drawSprites();
}

function mouseDragged() {
	Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	chain.fly();
}

function detectCollision(a, b) {
	var aPos = a.body.position;
	var bPos = b.body.position;
	console.log(a.r);

	var distance = dist(aPos.x, aPos.y, bPos.x, bPos.y);
	if (distance <= a.r + b.r) {
		console.log(true);
		Body.setStatic(a.body, false);
	}
}