
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone=new Stone(100,460,23);
	mango1=new mango(600,290,34);
	mango2=new mango(855,325,35);
	mango3=new mango(670,260,35);
	mango4=new mango(730,200,35);
	mango5=new mango(710,320,36);
	
	attach=new Launcher(stone.body,{x:100,y:465});
	
	Engine.run(engine);

}

function draw() {

  background(230);

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
  //Add code for displaying text here!

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstone,lmango){

	if(lstone.body.position.x- lmango.body.position.x <lmango.diametre + lstone.diametre
		&& lmango.body.position.x - lstone.body.position.x  < lmango.diametre + lstone.diametre
		&&lstone.body.position.y -lmango.body.position.y < lmango.diametre + lstone.diametre
		&& lmango.body.position.y - lstone.body.position.y < lmango.diametre + lstone.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		attach.Launch(stone.body);
	}
}