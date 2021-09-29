class Bob {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 70, {
            "isStatic": false,
            "restitution": 0.3,
            "friction": 0.5,
            "density": 0.1
        });

        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        const { x, y } = this.body.position;
        push();
        translate(x, y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        ellipse(0, 0, 70, 70);
        pop();
    }
}