//Load the reference image and the masking image before anything else
function preload() {
  //Load reference image that the program will redraw and animate
  img = loadImage('assets/Edvard_Munch_The_Scream.jpeg');
  //Load masking image to use for sorting image segments into separate image sections
  maskedImg = loadImage('assets/thescreammask.png');
}



function setup() {
  //Make the canvas the same size as the browser window
  createCanvas(windowWidth, windowHeight);


  //Load pixel data from the reference image and masking image so pixels can be used
  //instead of get(). This is to increase speed/efficiency.
  //REFERENCE NOTE: I learned about how to use pixels using P5 references:
  //https://p5js.org/reference/p5/pixels/
  img.loadPixels();
  maskedImg.loadPixels();


  //Calculate the fit for when the window and canvas are resized
  calculateFit();

  //Setup the stars that appear when the stress level is lower
  setupStars();

  //Create all image segment objects (foreground + background)
  setupSegments();

  //Set up the sparkles that appear on the water when the stress level is lower
  setupWaterSparkles();

  //If the user has not clicked to start the experience,
  //then stop here
  if (!started) {
    return;
  } 
}




function draw() {

  //If the user has not clicked to start the experience,
  //then draw the starting screen and stop here
   if (!started) {
        drawStartScreen();
        return;
    }

     
  //Set the background to black
  background(0);


  //Check if the win condition has been met
  //When the user lowers all stress values, they 'win'
  if (!challengeWon && checkWinCondition()) {
    challengeWon = true;
  }


  //If the challenge has not been won yet then update the stress values
 if (!challengeWon) {
    updateStressValues();
}



  //Update the glowing effect on the bridge
  updateBridgeGlow();

  //Update the water ripple animation
  updateWaterRipples();

  //If figure stress level is less then 0.5...
  if(figureStress < 0.5 ){
    //then update the calm figure animation
    updateFiguresCalm();
  } else {
    //otherwise update the stressed figures animation
    updateFiguresApproach();
  }

  //If the bridge stress level is greater than 0.5...
  if(bridgeStress > 0.5) {
    //then update bridge shake and bridge corruption animations.
    updateBridgeShake();   
    updateBridgeCorruption();
  }

  //If the sky stess level is greater than 0.5...
  if(skyStress > 0.5) {
    //Update the sky movement animation
    updateSkyFlow();
  }
  

  //Update the lightning flash animation
  updateLightning();

  //Update the scream person's body animation
  updateBody();


  //Draw the background segments to the canvas.
  //This serves as a greyscale background to make the image more cohesive when animations occur.
  for (const segment of segmentsBG) {
    segment.draw();
  }

  //Draw the main image segments to the canvas without the outlining segments
  drawSegments();

  //Update and draw the low stress sparkle effect on the water
  updateWaterSparkles();
  drawWaterSparkles();

  //Draw the stars in the sky when stress value is low
  drawStars();

  //Draw the stress panel user interface 
  drawUIPanel();

  //Draw the buttons on the left side panel
  drawUIButtons();

 
  //Check state of program; should instructions or hint panel be shown? has challenge been completed?
  checkProgramState();

  
}