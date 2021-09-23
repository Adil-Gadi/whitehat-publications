class Paper {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 70, {
            "isStatic": false,
            "restitution": 0.3,
            "friction": 0.5,
            "density": 0.1
        });
        this.image = loadImage("../images/paper.png");

        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        const { x, y } = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, 70, 70);
        pop();
    }
}