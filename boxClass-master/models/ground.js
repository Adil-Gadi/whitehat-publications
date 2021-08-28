class Ground {
    constructor(x, y, width, height, color) {
        this.ground = Bodies.rectangle(x, y, width, height, { "isStatic": true });
        this.properties = {
            "width": width,
            "height": height,
            "color": color,
        };

        World.add(world, this.ground);
    }

    display() {
        var { x, y } = this.ground.position;
        rectMode(CENTER);
        push();
        rect(x, y, this.properties.width, this.properties.height);
        pop();
    }
}