
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy
var slingstoneI
function preload()
{
	boyIMG = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	boy = createSprite(200,600);
	boy.addImage(boyIMG);
	boy.scale = 0.10
	//Create the Bodies Here.
	tree1 = new Tree(600,425,100,100)
	stone1 = new stone(100,600,30);
	slingstoneI = new sling(stone1.body,{x:150,y:540});
    ground1 = new ground(400,675,800,50);
	mango1 = new mango(500,270,50)
	mango2 = new mango(400,350,50)
	mango3 = new mango(620,320,50)
	mango4 = new mango(600,225,50)
	mango5 = new mango(700,300,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  ground1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingstoneI.display();
    drawSprites();
 
}
function mouseDragged(){
   
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
   slingstoneI.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition= lmango.body.position
	stoneBodyPosition= lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:150,y:540})
		slingstoneI.attach(stone1.body);
	}
}


