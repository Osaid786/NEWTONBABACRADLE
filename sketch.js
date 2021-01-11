
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,bob1,bob2,bob3,bob4,bob5;
var slingShot,sling2,sling3,sling4,sling5;



function setup() {
	createCanvas(4000, 1600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      box1=new Box(400,10);
      
      bob1=new Bob2(450,100);
	    bob2=new Bob(300,100);
      bob3=new Bob2(600,100);
      bob4=new Bob2(750,100);
      bob5=new Bob(900,100);

	slingShot = new SlingShot(bob1.body,{x:450,y:10});
  sling2 = new SlingShot2(bob2.body,{x:300,y:10});
  sling3 = new SlingShot3(bob3.body,{x:600,y:10});
  sling4 = new SlingShot4(bob4.body,{x:750,y:10});
  sling5 = new SlingShot5(bob5.body,{x:900,y:10});
  
	  Engine.run(engine);

}


function draw() {
  
  background(220);
  Engine.update(engine)
  strokeWeight(4)
  
  box1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  slingShot.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function keyPressed(){
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob2.body,bob2.body.position,{x:4,y:1})
  }
}




