class Paper {
    constructor(x, y) {
        this.body = Bodies.circle(x, y, 25, {
            "isStatic": false,
            "restitution": 0.3,
            "friction": 0.5,
            "density": 0.1
        });

        World.add(world, this.body);
    }

    display() {
        const { x, y } = this.body.position;
        push();
        translate(x, y);
        fill(255);
        ellipse(0, 0, 25, 25);
        pop();
    }
}