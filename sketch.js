var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(400,200,10,30);
  bullet.shapeColor = color("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  
  
  thickness = random(22,91);
  bullet.velocityX = speed;

}

function draw() {
  background("black");

  if(hasCollided(bullet,wall))
  {
     bullet.velocityX = 0;
     var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


     if(damage>10)
     {
       wall.shapeColor = color("green");
     }
     
     if(damage<10)
     {
       wall.shapeColor = color("red");
     }
  }
   drawSprites();
}

function hasCollided(lbullet,lwall) 
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge)
   {
     return true;
   }
   return false;
}