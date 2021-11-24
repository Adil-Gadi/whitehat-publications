class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
    this.dead = false;
  }

  display() {
    //console.log(this.body.speed);
    if (this.body.speed < 3) {
      super.display();
    } else {
      if (!this.dead) {
        score++;
      }
      World.remove(world, this.body);
      this.dead = true;
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }

  }



};