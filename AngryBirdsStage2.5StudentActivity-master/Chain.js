class Chain {
    constructor(bodyA, bodyB) {
        this.chain = Constraint.create({ bodyA, bodyB, "stiffness": 0.004, "length": 10 });

        World.add(world, this.chain);
    }

    display() {
        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}
