class Mango {
    constructor(x, y) {
        this.width = 20;
        this.height = 20;
        this.image = loadImage("../images/mango.png");
        const options = {
            "isStatic": true,
            "restitution": 0,
            "friction": 1
        }
        this.body = Bodies.circle(x, y, this.width, options);
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width + 40, this.height + 40);
        pop();
    }
};
