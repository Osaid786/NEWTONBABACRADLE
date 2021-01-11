class SlingShot3{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    display(){
      
           
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(1);
        line(pointA.x+600, pointA.y+80, pointB.x+600, pointB.y+10); 
        }
    } 