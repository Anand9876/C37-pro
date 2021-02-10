class Quiz{
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
    
      async start(){
         if(gameState === 0){
            contestant = new Contestant();
             var contestantCountRef = await database.ref('contestantCount').once("value");
              if(contestantCountRef.exists()){
                 contestantCount = contestantCountRef.val();
                  contestant.getCount();
                 } 
                 question = new Question()
                  question.display();
                 } 
                }
  play(){
 background("orange")
    Contestant.getContestantInfo();
     if(allContestants !== undefined){
      var display_position = 130;
         for(var plr in allContestants){
          var correctanswer="3";
            if (correctanswer===allContestants[plr].answer)
             fill("Green")
              else fill("red");
              display_position+=20
                textSize(15);
                text("Result of the Quiz",width/3,75)
                text("And the answer is '3'.",width/3,300)
                text("Note:The people those who are correct they'll appear green in color.",width/6,100)
                 text(allContestants[plr].name + ": " + allContestants[plr].answer,120,display_position)
                  } 
                 } 
                /* if(keyIsDown(UP_ARROW) && contestant.index !== null){
                    contestant.distance +=50
                     contestant.update();
                    }*/
                    } 
                  }
                   
                   

