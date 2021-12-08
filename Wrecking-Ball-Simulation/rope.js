class Rope {

    constructor(body, point) {
        this.point = point;
        this.constraint = Constraint.create({
            'bodyA': body,
            'pointB': point,
            'stiffness': 1,
            'length': 250
        });

        World.add(world, this.constraint);
    }

    display() {
        const { x: x1, y: y1 } = this.constraint.bodyA.position;

        push();
        stroke('brown');
        strokeWeight(3);
        line(x1, y1, this.point.x, this.point.y);
        pop();
    }
}