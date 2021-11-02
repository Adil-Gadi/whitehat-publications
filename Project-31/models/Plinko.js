class Plinko {
    constructor(x, y) {
        this.radius = 10;

        this.body = Bodies.circle(x, y, this.radius, {
            "isStatic": true
        });
        World.add(world, this.body);
    }

    display() {
        push();
        const { x, y } = this.body.position;
        translate(x, y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}