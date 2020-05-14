class Shooter{
    constructor(bodyA, pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 0.05,
           length: 1
       }
       this.sling = Constraint.create(options);
       this.pointB = pointB;
       World.add(world, this.sling);
       
    }
}