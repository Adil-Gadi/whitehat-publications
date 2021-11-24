class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.velocity.x);
    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var position = [
        this.body.position.x,
        this.body.position.y
      ];

      this.trajectory.push(position);
    }

    console.log(this.trajectory);

    for (const item of this.trajectory) {
      image(this.smokeImage, item[0], item[1], 40, 40);
    }

    super.display();
  }
}
