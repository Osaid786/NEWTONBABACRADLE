class Bob{
    constructor(x,y,radius)
    {
        var options={
           'isStatic': false
           
           
         }

    this.body=Bodies.circle(x,y,60,options)
    this.radius=50
    World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
         

        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        strokeWeight(20)
        stroke("green")
        fill("violet")
        circle(pos.x,pos.y,this.radius)
        pop();
    }
}