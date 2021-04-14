class Game {
    constructor(){}
    
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
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    
      

      car1 = createSprites(100,200);
      car2= createSprites(300,200);
      car3 = createSprites(500,200);
      car4 = createSprites(700,200);


    }
    play(){
      form.hide();
      textsize(30);
      text("GameStart",120,100);
      player.getplayerInfo();

      if(allPlayers !== undefined){
        var display_position = 130;
        display_position+=20;
        textsize(15);
            text(allPlayers[plr].name+""+ allPlayers[plr].distance,120,display_position)
    }
  } 