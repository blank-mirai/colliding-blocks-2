var moving, static;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;

function setup() {
  createCanvas(800,400);
  moving = createSprite(100, 300, 50, 30);
  moving.shapeColor = "blue";
  //moving.velocityY = -5;
  static = createSprite(400, 250, 30, 50);
  static.shapeColor = "blue";
  static.velocityY = -5;
  gameObject1 = createSprite(100, 50, 35, 35);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 50, 35, 35);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 50, 35, 35);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 50, 35, 35);
  gameObject4.shapeColor = "green";
  gameObject4.velocityY = 3;
}

function draw() {
  background(0,0,0);  

  //moving.x = mouseX;
  //moving.y = mouseY;

  console.log(moving.y - static.y);

  if(isTouching(static, gameObject4)){
      static.shapeColor = "red";
      gameObject4.shapeColor = "red";
    }
    else{
      static.shapeColor = "blue";
      gameObject4.shapeColor = "green";
    }
  
  bounceOff(static, gameObject4);
  drawSprites();
}