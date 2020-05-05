class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     fly(){
         this.sling.bodyA = null;
     }


    display(){
        
        var pointB = this.sling.pointB;
        fill(255)
        rect(pointB.x, pointB.y - 75, 20, 100);
        rect(pointB.x, pointB.y + 75, 20, 100);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            strokeWeight(4);
            stroke(0, 50, 0);
            fill(255);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
    
}