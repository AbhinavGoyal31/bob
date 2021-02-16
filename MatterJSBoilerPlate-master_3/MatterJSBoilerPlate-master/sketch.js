
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob = new Bob(260,300,40,50);
roof = new Roof(180,360,40,10);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



