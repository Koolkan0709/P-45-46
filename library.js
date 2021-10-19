function blocks(){
    if(frameCount%35===0){
      var obs = createSprite(200,200,10,120);
      obs.x = Math.round(random(200,displayWidth - 200))
      obs.y = Math.round(random(100,displayHeight - 100))
      obs.shapeColor = "red"
      //obs.lifetime = 200;
      obsGroup.add(obs);
      
    }
  }
function blocks2(){
    if(frameCount%25===0){
      var obs1 = createSprite(200,200,15,140);
      obs1.x = Math.round(random(200,displayWidth - 200))
      obs1.y = Math.round(random(100,displayHeight - 100))
      obs1.shapeColor = "blue"
      //obs1.lifetime = 200;
      obsGroup.add(obs1);
      
    }
  }
function power(){
    if(frameCount%75==0){
      var ups = createSprite(200,200,10,10);
      ups.x = Math.round(random(200,displayWidth - 200))
      ups.y = Math.round(random(100,displayHeight - 100))
      //ups.shapeColor = "white"
      ups.lifetime = 200;
      powerGroup.add(ups);
      var rand = Math.round(random(1,2));
      if(rand==1){
        ups.addImage(strengthImg);
        ups.scale = 0.1;
      }
      if(rand==2){
        ups.addImage(speedImg);
        ups.scale = 0.1;
    }
    
    }
  }
  
  function mouseClicked(){
    
    knife = createSprite(200,200,10,5);
    knife.shapeColor = "red"
    knifeGroup.add(knife);
    knife.x = player.x;
    knife.y = player.y;
  
    if(mouseX > player.x && mouseY > player.y){
      knife.velocityX += 5;
      knife.velocityY += 5;
    }
    else if(mouseX > player.x && mouseY < player.y){
      knife.velocityX += 5;
      knife.velocityY -= 5;
    }
    else if(mouseX < player.x && mouseY < player.y){
      knife.velocityX -= 5;
      knife.velocityY -= 5;
    }
    else if(mouseX < player.x && mouseY > player.y){
      knife.velocityX -= 5;
      knife.velocityY += 5;
    }
  
  }
  function popUp(){
    swal({
        title: `You Win!`,
        text: "Congratulations! You have defended your base",
        imageUrl:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18948e113237429.6023ca14da2cc.gif",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing",
        
      });
  }