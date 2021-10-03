class Chain {
    constructor(bodyA, pointB) {
        const options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.008,
            length: 40
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly() {
        this.chain.bodyA = null;
    }

    display() {
        if (this.chain.bodyA) {
            push();
            stroke("#301608");
            strokeWeight(7);
            line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
            pop();
        }
    }
}