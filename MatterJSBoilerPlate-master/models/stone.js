class Stone {
    constructor(x, y) {
        const options = {
            'restitution': 0,
            'friction': 1.0,
            'density': 1.2,
            "isStatic": false
        }
        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}