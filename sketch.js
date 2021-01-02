const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;



var myengine , myworld;
var ground;



function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  world = myengine.world;

  

  box = new Box(200,100,50,50);
  box2 = new Box(225,150,50,100);

  ground = new Ground (200,390,400,20);
  console.log(ground);

}

function draw() {

  background(255,255,255);

  Engine.update(myengine);

 
  box.display();
  box2.display();
  ground.display();
  
}
