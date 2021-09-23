class Basket {
    constructor(x, y) {
        this.leftSide = Bodies.rectangle(x, y, 20, 100, { "isStatic": true });
        this.rightSide = Bodies.rectangle(x + 180, y, 20, 100, { "isStatic": true });
        this.bottomSide = Bodies.rectangle(x + 90, y + 60, 200, 20, { "isStatic": true });
        this.image = loadImage("../images/dustbingreen.png");

        World.add(world, this.leftSide);
        World.add(world, this.rightSide);
        World.add(world, this.bottomSide);
    }

    display() {
        const lx = this.leftSide.position.x;
        const ly = this.leftSide.position.y;
        const rx = this.rightSide.position.x;
        const ry = this.rightSide.position.y;
        const bx = this.bottomSide.position.x;
        const by = this.bottomSide.position.y;
        push();
        rectMode(CENTER);
        fill("green");
        rect(lx, ly, 20, 100);
        rect(rx, ry, 20, 100);
        rect(bx, by, 200, 20);
        image(this.image, 600, 500, 180, 120)
        pop();
    }
}