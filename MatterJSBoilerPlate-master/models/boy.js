class Boy {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 250;
        this.image = loadImage("../images/boy.png");
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}