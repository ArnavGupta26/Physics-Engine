const myEngine = Matter.Engine;
const myWorld = Matter.World;
const myBodies = Matter.Bodies;

var world,engine;
var ball,ground;

function setup() {
  createCanvas(400,400);
  
  engine = myEngine.create();
  world = engine.world;  

  var ground_options = {
    isStatic : true
  }

  ground = myBodies.rectangle(200,390,400,20,ground_options);
  myWorld.add(world,ground);

  var ball_options = {
    restitution : 1.0
  }

  ball = myBodies.circle(200,200,20,ball_options);
  myWorld.add (world,ball);
}

function draw() {
  background(0);  
  myEngine.update(engine);
  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(CENTER);
  fill("yellow");
  ellipse(ball.position.x , ball.position.y , 40,40);
}
