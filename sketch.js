
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper;
var ground;
var dustbinObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,670,20);
	dustbinObj=new dustbin(700,650);
    ground=new Ground(400,680,800,20);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  paper.display();
  ground.display();
  dustbinObj.display();

  drawSprites();
 
}
function keyPressed(){
if  (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20});
}
}



