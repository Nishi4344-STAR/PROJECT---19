var car , wall

var speed , weight



function setup() {
  createCanvas(1360,500);
  car = createSprite(400, 200, 50, 50);
  car.shapeColor="white"

  wall = createSprite(1360,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed  ;
  
  
}


function draw() {
  background("black");   
  
  
    if(wall.x-car.x < (car.width+wall.width)/2){
     car.velocityX=0;
     var deformation = 0.5 * weight * speed * speed / 22500;
    
    if(deformation<100){
       car.shapeColor="green";
       
      }

      else if(deformation>100 && deformation<180){
        car.shapeColor="yellow";
        
      }

      else if(deformation>180){
        car.shapeColor="red";
        
      }
    }

  drawSprites();
}