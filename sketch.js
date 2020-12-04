
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rop3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;

	bob1 = new Bob(200,600,70);
	bob2 = new Bob(270,600,70);
	bob3 = new Bob(340,600,70);
	bob4 = new Bob(410,600,70);
	bob5 = new Bob(480,600,70);

    roof = new Roof(360,200,380,30);

   rope1 = new Rope(bob1.body,roof.body,-bobDiameter*4,0);
   rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2.3,0);
   rope3 = new Rope(bob3.body,roof.body,-bobDiameter*0.8,0);
   rope4 = new Rope(bob4.body,roof.body,-bobDiameter*-1,0);
   rope5 = new Rope(bob5.body,roof.body,-bobDiameter*-3,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
 
roof.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-75}); } 
} 

