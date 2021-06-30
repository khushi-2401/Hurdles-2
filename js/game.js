class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();

        var playerCountRef = await database.ref('playerCount').once("value");

         if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }

        form = new Form()
        form.display();
      }
  
      runner1 = createSprite(100,100);
      runner1.addImage(Image1);
      runner2 = createSprite(100,200);
      runner2.addImage(Image2);
      runner3 = createSprite(100,300);
      runner3.addImage(Image3);
      runner4 = createSprite(100,400);
      runner4.addImage(Image4);
      runner5 = createSprite(100,500);
      runner5.addImage(Image5);
      runner6 = createSprite(100,600);
      runner6.addImage(Image6);
      runners = [runner1, runner2, runner3, runner4, runner5, runner6];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(trackImg);

        var index = 0;

        var x;
        var y = 175;;
  
        for(var plr in allPlayers){
          index = index + 1 ;
  
          y = y + 200;

          x = displayWidth - allPlayers[plr].distance;

          runners[index-1].x = x;
          runners[index-1].y = y;

         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);

            runners[index - 1].shapeColor = "red";
            
          }
       
        }
             drawSprites();
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2;
      }
     
    }
  
    end(){
      console.log("Game Ended");
    }
  }
  