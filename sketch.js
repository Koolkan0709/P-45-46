var player,comp;
var wall1, wall2, wall3, wall4;
var wallGroup, obsGroup, powerGroup;
var gameState = 0;
var speedImg, strengthImg;
var knife, knifeGroup;
var playerLife = 6;
var compLife = 6;
var playButton;

function preload(){
  speedImg = loadImage("speed.png");
  strengthImg = loadImage("strength.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  playButton = createButton("Next");
  playButton.position(width - 200, height - 200);
  playButton.class("customButton");
  

   player = createSprite(200,500,20,20);
   player.shapeColor  = "green"

   comp = createSprite(displayWidth - 100,500,20,20);
   comp.shapeColor = "yellow"


   wall1 = createSprite(0,displayHeight/2,20,displayHeight);
   wall2 = createSprite(displayWidth - 10,displayHeight/2,20,displayHeight);
   wall3 = createSprite(displayWidth/2,0,displayWidth,20);
   wall4 = createSprite(displayWidth/2,displayHeight - 10,displayWidth,20);
  
   wallGroup = createGroup();
   wallGroup.add(wall1);
   wallGroup.add(wall2);
   wallGroup.add(wall3);
   wallGroup.add(wall4);
   wallGroup.setVisibleEach(0);

   obsGroup = createGroup();
   powerGroup = createGroup();
   knifeGroup = createGroup();
   

}

function draw() {
  
  background(0);

  if(gameState==0){
    textSize(45);
    fill("yellow")
    text("GAME INSTRUCTIONS",displayWidth/2 - 200,100)
    playButton.mousePressed(() => {  
      gameState = 1;
    })
  }

  else if(gameState==1){

    playButton.hide();
    textSize(25);
    fill("coral")
    text("computer life = " + compLife,displayWidth - 400,75)

    player.collide(wallGroup);
    player.collide(obsGroup);
    comp.collide(wallGroup);
    comp.collide(obsGroup);

    if(comp.isTouching(knifeGroup)){
      compLife -= 2;
    }

    if(knifeGroup.isTouching(obsGroup)){
      knifeGroup.destroyEach();
    }

    if(obsGroup.length==10){
      if (keyDown(UP_ARROW)){
        player.y -= 5
      }
      if (keyDown(DOWN_ARROW)){
        player.y += 5
      }
      if (keyDown(RIGHT_ARROW)){
        player.x += 5
      }
      if (keyDown(LEFT_ARROW)){
        player.x -= 5
      }

      comp.x -= 2;
      comp.velocityY = Math.round(random(-2,2));

      if(frameCount%30==0){
        comp.y = Math.round(random(200,displayHeight - 200))
      }
      
      if(comp.x<100){
        comp.velocityX += 2;
      }

    }

    if(compLife==0){
      gameState = 2;
    }

    power();

    if(obsGroup.length<10){
      blocks();
      blocks2();
    }
    drawSprites();
  }

  else if(gameState==2){
    
    popUp();
  }

}

