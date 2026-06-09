//This function is called in sketch.js draw() to take appropriate action 
//based on the current state of the program
function checkProgramState(){
    //If the user has just started and the instructions need to be shown...
    if (showInstructions) {
      //then make the pop up with instructions appear
      drawInstructionsPopup();
    }

    //If the user has clicked the show hint button...
    if (showHintPanel) {
        //then reveal the hint text
        drawHintPanel();
    }

    
    //If the user has lowered the stress values to 'win'..
    if (challengeWon) {
      //Make a thin semi transparent banner type of rectangle
      //at the top of the canvas
      fill(0, 180);
      rect(0, 0, width, 60);

      //Draw the 'win' message text
      fill(255);
      textAlign(CENTER, CENTER);
      textSize(20);
      text(
          "The Scream has found emotional balance",
          width / 2,
          30
      );
    }
}