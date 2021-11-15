class Box extends BaseClass {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.visibility = 255;
        this.destroyed = false;
        this.width = 50;
        this.height = 50;
        // this.image = loadImage("sprites/wood1.png");
    }

    display() {
        if (this.body.speed < 3.8) {
            super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            
            tint(255, this.visibility);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        // super.display();
    }

    score() {
        if (this.visibility<0 && this.visibility>-150) {
            score++;
        }
    }
};