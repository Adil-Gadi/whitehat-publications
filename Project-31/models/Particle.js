class Particle {
    constructor(x, y) {
        this.radius = 10;

        this.body = Bodies.circle(x, y, this.radius, {
            "restitution": 0.4
        });
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display() {
        push();
        const { x, y } = this.body.position;
        translate(x, y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}