const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
var bg, s1;
var engine, world;

function setup() {
  createCanvas(800, 400);


  c1 = createSprite(400, 400);
  c1.addImage(c2);
  c1.scale = 0.1
  var canvas = createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;
  // c1= createSprite(400, 200, 50, 50);

  platform = new Ground(0, 300, 1300, 20);
  particles = new Particle(mouseX, mouseY, 10);


  // mango1 = new Mango(200, 280, 10);
}



function preload() {
  bg = loadImage("snow2.jpg")
  s1 = loadImage("snow5.webp");
  c2 = loadImage("boy.png")
}

function display1() {

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
  //imageMode(CENTER);
  imageMode(CENTER);
  image(s1, pos.x, pos.y, 50, 50);

  noStroke();
  //fill(this.color)
  //ellipseMode(RADIUS);
  //ellipse(20, 20, 20,20);
  pop();
}

function draw() {
  background(255, 255, 255);
  image(bg, 0, 0, innerWidth, innerHeight);
  // for (let index = 0; index < 30; index++)
  {
    particles.display()

  }
  if (keyDown("LEFT_ARROW")) {
    c1.addImage(c2);
    c1.x = c1.x - 1;
  }

  if (keyDown("RIGHT_ARROW")) {
    c1.addImage(c2);
    c1.x = c1.x + 1;
  }
  Engine.update(engine);
  drawSprites();
}

function mouseClicked() {
  // for (let index = 0; index < 10; index++)
  {
    particles = new Particle(mouseX, mouseY, 10);
    console.log("POP");
    //balls.push(particles);
    particles.display();
  }
  //if(gameState!=="end")
  {
    //  count++;

  }
}