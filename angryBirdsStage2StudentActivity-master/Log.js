class Log extends BaseClass {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      this.angle = angle;
      Body.setAngle(this.body, angle);
    }
  };
  