class Question {
    constructor() {
      this.input=createInput("Enter your name here")
      this.input1=createInput("Enter the answer here")
      this.button=createButton("Submit")
      this.greeting=createElement("h2")
      this.title=createElement("MyQuizgame")
      this.question=createElement("question")
      this.option1=createElement("option1")
      this.option2=createElement("option2")
      this.option3=createElement("option3")
  
    }
    hide(){
      this.greeting.hide();
      this.title.hide();
      this.button.hide();
      this.input.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();

    }
  
    display(){
      
      this.title.html("Myquizgame");
      this.title.position(350, 20);
      
      this.question.html("Question:-CCS stands for?");
      this.question.position(150,80);
      this.option1.html("1:Carbon Capture Storage");
      this.option1.position(150,100);
      this.option2.html("2:Carbon Capture Sequestration");
      this.option2.position(150,120);
      this.option3.html("3:Both 1 and 2")
      this.option3.position(150,140);
      
      
      this.input.position(150,230);
      this.input1.position(350,230);
      this.button.position(310, 270);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.input1.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.button.hide();

       contestant.name=this.input.value();
       contestant.answer=this.input1.value();

      

       /*this.button1=createButton("Results")
       this.button1.position(width/2,270)*/
        
       this.greeting.html("Thanks for Attempting this question"+ "-"+contestant.name)
        this.greeting.position(width/6,10)

        
        
       contestantCount+=1;
       contestant.index = contestantCount
       contestant.update()
       contestant.updateCount(contestantCount);
       
      });
      
      
  
    }
  }
  