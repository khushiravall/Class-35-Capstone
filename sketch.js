// game idea: nighttime background, there is a robber hanging of the a rope,
// trying to get the gold. The aim of the game is for the robbers to get 
// all two of the gold bags,and they will recive stars for each bag of gold they get.
// Game is finished,once all bags have been colleced. 

//need to use function collide for bags and thief.

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world, backgroundImg;
var canvas;
var rope;
var thief, thiefImg, thiefConstraint;
var goldBagImg;
var goldBag1, goldBag2


function preload() {
  backgroundImg = loadImage("background.jpg");
  thiefImg = loadImage("thief.png");
  goldBagImg = loadImage("goldbag.png");

}

function setup() {
  canvas = createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;

  rope = new Rope(6,{x:300, y:60})

  thief = Bodies.rectangle(400, 60, 80, 60)
  Matter.Composite.add(rope.body, thief)

  thiefConstraint = new Link(rope, thief)
 
  goldBag1 = createSprite(100,370,50, 50)
  goldBag1.addImage("GB1", goldBagImg)
  goldBag1.scale = 0.2

  goldBag2 = createSprite(500,270,50, 50)
  goldBag2.addImage("GB2", goldBagImg)
  goldBag2.scale = 0.2
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  rope.show()
  Engine.update(engine);

  image(thiefImg, thief.position.x, thief.position.y,80,80)


drawSprites()

if(collide(thief,goldBag1))
{
  console.log("khushi")
  goldBag1.visible = false;
}

if(collide(thief,goldBag2))
{
  console.log("khushi2")
  goldBag2.visible = false;
}

}

function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              // World.remove(engine.world,GB1);
              //  GoldBag1 = null;
               return true; 
            }
            else{
              return false;
            }
         }
}