
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



	


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									
	var paper = new Paper1(500,20,1.5);

	var Ground = new ground()
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 Ground.display();

  drawSprites();
 
}



