const {
    Engine,
    Bodies,
    Constraint,
    Body,
    World
} = Matter;

let engine, world;
let ball, rope;
let ground;
let blocks = [];

function setup() {
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(100,300)
    rope = new Rope(ball.body, { x: 250, y: 300});
    for (let i = 300; i < 500; i += 50) {
        for (let l = 250; l < 750; l += 50) {
            blocks.push(new Block(i,l));
        }
    }

    ground = new Ground(1500,800,3000,50);
}

function draw() {
    background('lightblue');
    ground.display();
    ball.display();
    rope.display();
    blocks.forEach(block => block.display());
    Engine.update(engine);
}