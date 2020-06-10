var car,wall;
var speed,weight;

function setup() {
  createCanvas(3000,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = (speed);

  wall =  createSprite(1500,200,60,200);
  wall.shapeColor(80,80,80);
}

function draw() {
  background(255,255,255);  
  
  car.collide(wall);
  
  if(car.x - wall.x <= wall.width/2 + car.width/2 &&
    wall.x-car.x<=wall.width/2 + car.width/2 &&
    car.y- wall.y <= wall.height/2 + car.height/2 &&
    wall.y- car.y <= wall.height/2 + car.height/2) {
    
      if (0.5*weight*speed*speed/22500<100) {
        car.shapeColor(0,255,100);     
    }
    
      if (0.5*weight*speed*speed/22500>100 && 0.5*weight*speed*speed/22500<180) {
        car.shapeColor(230,230,0);
      }
  
    if (0.5*weight*speed*speed/22500>100) {
      car.shapeColor(255,0,0);
      } 
  }
 
  drawSprites();
}