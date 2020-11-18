
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Roof(600, 400, 250, 20);

	bob1 = new Bob(500, 600);
	
	bob2 = new Bob(550, 600);
	
	bob3 = new Bob(600, 600);

	bob4 = new Bob(650, 600);

	bob5 = new Bob(700, 600);


	chain1 = new Rope(bob1.body, base.body, -100, 0);

	chain2 = new Rope(bob2.body, base.body, -50, 0);

	chain3 = new Rope(bob3.body, base.body, 0, 0);

	chain4 = new Rope(bob4.body, base.body, 50, 0);

	chain5 = new Rope(bob5.body, base.body, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  base.display();

  ellipseMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  //keyPressed();
 
}
function keyPressed() 
{
 if (keyCode === UP_ARROW) 
 {
   Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-50});
	//Body.applyForce(bobObject1.body, bobObject1.body.position,{x:80,y:-80});
 }
}
