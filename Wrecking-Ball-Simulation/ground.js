class Ground {
    constructor(x, y, width, height) {
        this.width = width
        this.height = height;
        this.body = Matter.Bodies.rectangle(x, y, width, height, { 'isStatic': true });

        World.add(world, this.body);
    }

    display() {
        push();
        const { x, y } = this.body.position;
        rectMode(CENTER);
        fill('brown');
        noStroke();
        rect(x, y, this.width, this.height);
        pop();
    }
}