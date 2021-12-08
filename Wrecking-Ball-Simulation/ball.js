class Ball {
    constructor(x, y) {
        this.body = Matter.Bodies.circle(x, y, 50);

        World.add(world, this.body);
    }

    display() {
        push();
        const { x, y } = this.body.position;
        ellipseMode(CENTER);
        fill('gray');
        noStroke();
        ellipse(x, y, 50);
        pop();
    }
}