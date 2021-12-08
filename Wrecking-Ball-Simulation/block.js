class Block {

    constructor(x, y) {
        this.body = Matter.Bodies.rectangle(x, y, 50, 50);

        World.add(world,this.body);
    }

    display() {
        push();
        const { x, y } = this.body.position;
        rectMode(CENTER);
        fill('gray');
        stroke('darkred');
        rect(x, y, 50, 50);
        pop();
    }
}