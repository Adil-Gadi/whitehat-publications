class Tree {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 500;
        this.height = 700;
        this.image = loadImage("../images/tree.png");
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}