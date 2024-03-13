/*
Derek Burns
ICS4U-01
https://sites.google.com/ocdsb.ca/coolermathgames/home
Aim trainer game named "Aimden Ring"
*/

//Normal Variable List
var time = 60;
var level = 3;
var Score = 0;
var difficulty = 0;
var TargetSize = 30; //set how big you want the targets to be and collision detection could be used for dificuilty settings

//To see if a targets cords need to be randomized again
var TargetCheck1 = 0;
var TargetCheck2 = 0;
var TargetCheck3 = 0;
var TargetCheck4 = 0;
//Target 1 section
var Target1X = 0;
var Target1Y = 0;
//Target 2 section
var Target2X = 0;
var Target2Y = 0;
//Target 3 section
var Target3X = 0;
var Target3Y = 0;
//Target 4 section
var Target4X = 0;
var Target4Y = 0;
//To get rid of reference error
var CheckMiss = 0;

/**
 * @name setup
 * @description does a setup of the canvas size to draw over
 * @returns none
 */
function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  
}

/**
 * @name preload
 * @description loads all images entered so that they can be used in the program
 * @returns none
 */
function preload(){
  titleScreen = loadImage('aimdenring.jpg')
  difficultyScreen = loadImage('difficulty.jpg')
  Sword = loadImage('dagger.png')
  GameOver = loadImage('gameover.jpg')
  monster1 = loadImage('Monster.png')
  monster2 = loadImage('Monster.png')
  monster3 = loadImage('Monster.png')
  monster4 = loadImage('Monster.png')
  
}

/**
 * @name draw
 * @description loops all code within draw and attempts to print it to the canvas 
 * if requested
 * @returns none
 */
function draw() {
  
  //difficulty menu
  if (level == 0) {
    image(difficultyScreen,0,0,windowWidth-100,windowHeight-100)
    imageMode(CENTER);
    image(Sword,mouseX,mouseY,40,40)
    if (keyIsDown(49)) { //#1 
      level = 1;
      print("difficulty set to easy")
      difficulty = 1;
      }
    if (keyIsDown(50)) { //#2
      level = 1;
      print("difficulty set to medium")
      difficulty = 2;
      }
    if (keyIsDown(51)) { //#3
      level = 1;
      print("difficulty set to hard")
      difficulty = 3;
      }
    }

  //InGame
  if (level == 1) {
    cursor()
    if (frameCount % 60 == 0) { //timer countdown
      time -= 1
      }
    if (difficulty == 1) {
      TargetSize = 50      
      }
    if (difficulty == 2) {
      TargetSize = 30     
      }
    if (difficulty == 3) {
      TargetSize = 15      
      }
    background (70)
    fill(255)
    textSize(16);
    //timer
    if (time>0) { //make sure the game still has time left
      text('Score:',20,20)
      text(Score,70,20)
      text('Timer:',20,40)
      text(time,70,40)
      }
    
    //gameover
    if (time == 0) {
      //scoreboad and game over hud
      image(GameOver,0,0,windowWidth-100,windowHeight-100)
      textSize(32)
      text("Your score was:",(windowWidth/2)-150,40)
      text(Score,(windowWidth/2)+80,40)
      level = 4; //set level to restart menu
       }
    
    if (time>0) {
      
      //Target 1 Code
      if (TargetCheck1 == 0) {
        Temp1 = random(windowWidth) //TempWidth
        Temp2 = random(windowHeight) //TempHeight
        }
      
      if (Temp1 > (windowWidth - 200)) {
        
        Temp1 -= 200
        }
      if (Temp1 < (200)) {
        Temp1 += 200
        }
      if (Temp2 > (windowHeight - 200)) {
        Temp2 -= 200
        }
      if (Temp2 < (200)) {
        Temp2 += 200
        }
      if (TargetCheck1 == 0) {
        Target1X = Temp1
        Target1Y = Temp2
        }
      image(monster1,Target1X,Target1Y,TargetSize,TargetSize)
      TargetCheck1 = 1
    
      //Target 2 Code
      if (TargetCheck2 == 0) {
        Temp1 = random(windowWidth) //TempWidth
        Temp2 = random(windowHeight) //TempHeight
        }
      
      if (Temp1 > (windowWidth - 200)) {
        
        Temp1 -= 200
        }
      if (Temp1 < (200)) {
        Temp1 += 200
        }
      if (Temp2 > (windowHeight - 200)) {
        Temp2 -= 200
        }
      if (Temp2 < (200)) {
        Temp2 += 200
        }
      if (TargetCheck2 == 0) {
        Target2X = Temp1
        Target2Y = Temp2
        }
      image(monster2,Target2X,Target2Y,TargetSize,TargetSize)
      TargetCheck2 = 1
    
      //Target 3 Code
      if (TargetCheck3 == 0) {
        Temp1 = random(windowWidth) //TempWidth
        Temp2 = random(windowHeight) //TempHeight
        }
      
      if (Temp1 > (windowWidth - 200)) {
        
        Temp1 -= 200
        }
      if (Temp1 < (200)) {
        Temp1 += 200
        }
      if (Temp2 > (windowHeight - 200)) {
        Temp2 -= 200
        }
      if (Temp2 < (200)) {
        Temp2 += 200
        }
      if (TargetCheck3 == 0) {
        Target3X = Temp1
        Target3Y = Temp2
        }
      image(monster3,Target3X,Target3Y,TargetSize,TargetSize)
      TargetCheck3 = 1
    
    
      //Target 4 Code
      if (TargetCheck4 == 0) {
        Temp1 = random(windowWidth) //TempWidth
        Temp2 = random(windowHeight) //TempHeight
        }
      
      if (Temp1 > (windowWidth - 200)) {
        
        Temp1 -= 200
        }
      if (Temp1 < (200)) {
        Temp1 += 200
        }
      if (Temp2 > (windowHeight - 200)) {
        Temp2 -= 200
        }
      if (Temp2 < (200)) {
        Temp2 += 200
        }
      if (TargetCheck4 == 0) {
        Target4X = Temp1
        Target4Y = Temp2
        }
      image(monster4,Target4X,Target4Y,TargetSize,TargetSize)
      TargetCheck4 = 1
    
    
    
    }//end of timer
  }
  
  //title screen
  if (level == 3) {
    noCursor()
    image(titleScreen,0,0,windowWidth-100,windowHeight-100)
    imageMode(CENTER);
    image(Sword,mouseX,mouseY,40,40)
    //if space bar is pressed go to next screen
    if (keyIsDown(32)) {
      level = 0;
      }
    }  
  
  //Restart menu
  if (level == 4) {
    //if r is pressed for restart
    if (keyIsDown(82)) {
      //Restart all variables like the game was never played   
      //Normal Variable List
      time = 60;
      level = 3;
      Score = 0;
      difficulty = 0;
      TargetSize = 30; //set how big you want the targets to be and collision             detection could be used for possible dificuilty settings later
      //To see if a targets cords need to be randomized again
      TargetCheck1 = 0;
      TargetCheck2 = 0;
      TargetCheck3 = 0;
      TargetCheck4 = 0;
      //Target 1 section
      Target1X = 0;
      Target1Y = 0;
      //Target 2 section
      Target2X = 0;
      Target2Y = 0;
      //Target 3 section
      Target3X = 0;
      Target3Y = 0;
      //Target 4 section
      Target4X = 0;
      Target4Y = 0;  
      }
    }

}

/**
 * @name mousePressed
 * @description function runs through the code if the mouse is pressed down
 * @returns none
 */
function mousePressed() {
  //make sure the game is still running
  if (time>0) {
    
  
    //Working on my own collision detection
    //target 1 collision
    if (mouseX > Target1X && mouseX < (Target1X + TargetSize)) {
      if (mouseY > Target1Y && mouseY < (Target1Y + TargetSize)) {
        TargetCheck1 = 0;
        Score += 1;
        CheckMiss = 1;
        }
      }
    //target 2 collision
    if (mouseX > Target2X && mouseX < (Target2X + TargetSize)) {
      if (mouseY > Target2Y && mouseY < (Target2Y + TargetSize)) {
        TargetCheck2 = 0;
        Score += 1;
        CheckMiss = 1;
        }
      }
    //target 3 collision
    if (mouseX > Target3X && mouseX < (Target3X + TargetSize)) {
      if (mouseY > Target3Y && mouseY < (Target3Y + TargetSize)) {
        TargetCheck3 = 0;
        Score += 1;
        CheckMiss = 1;
        }
      }
    //target 4 collision
    if (mouseX > Target4X && mouseX < (Target4X + TargetSize)) {
      if (mouseY > Target4Y && mouseY < (Target4Y + TargetSize)) {
        TargetCheck4 = 0;
        Score += 1;
        CheckMiss = 1;
        }
      }
    //If player missed a target on click
    if (CheckMiss == 0) {
      //Since we want the game to be hard on hardmode make it so the player can go        into negatives if missing to many times
      if (difficulty == 3) {
        Score -= 1;
        }
      //To confirm they are not on hard mode so that you cant go into negatives
      if (difficulty == 1 || difficulty == 2) {
        if (Score > 0) {
          Score -= 1;
          }
        }
      }
    
    //If you hit a target reset with no point deduction
    if (CheckMiss == 1) {
      CheckMiss = 0;
      }
    }
  }

