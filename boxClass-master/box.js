class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  display() {
    var { x, y } = this.body.position;
    push();
    console.log({x,y, "angle": this.body.angle});
    translate(x, y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
  }
}
