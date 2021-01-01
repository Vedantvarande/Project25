
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,sidebottom,side1,side2;
 var paperimage,dustbinimage,dustbin; 


function preload()
{
  dustbinimage = loadImage("dustbingreen.png");
}


function setup() 
{
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(400, 680, 800, 20);

     dustbin = createSprite(639,588,70,70);
     dustbin.addImage("dust",dustbinimage);
     dustbin.scale=0.5;
  
	   sidebottom = new Dustbin(689, 620, 20, 90);
     side1 = new Dustbin(659, 660, 40, 20);
     side2 = new Dustbin(589, 620, 20, 90);

    


     Engine.run(engine);
  
}


function draw() 
{

  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  paper.display();
  ground.display();
  sidebottom.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW)  
  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}
  }


