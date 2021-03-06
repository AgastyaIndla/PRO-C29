class Shooter{
    constructor(bodyA, pointB){
       var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 0.05,
           length: 1
       }
       this.sling = constraint.create(options);
       this.pointB = pointB;
       World.add(world, this.sling);
       
    }

    move(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(255);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}