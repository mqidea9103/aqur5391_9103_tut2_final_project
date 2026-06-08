//This function makes the figures in the image move smoothly toward a target position
//as well as grow slightly in size.
//Lerp is used to move the figures slightly each frame for a smooth animation effect of 
//the figures slowly moving closer to the screaming figure in the image foreground.
//NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the offsets and scale below were created with AI assistance: 
// (Microsoft Copilot), in order to achieve the desired movement effect.
function updateFiguresApproach() {

  //This hold the target x position of the figures
  //It is calculated using fit.w to ensure its position is preserved
  //when the window is resized.
  let targetX = fit.w * 0.10;
  //This hold the target y position of the figures
  //It is calculated using fit.h to ensure its position is preserved
  //when the window is resized.
  let targetY = fit.h * 0.05;


  //Make the x position of the figures move smoothly toward
  //the value of targetX at a speed of 0.10
  figuresOffsetX = lerp(figuresOffsetX, targetX, 0.1);


  //Make the y position of the figures move smoothly toward
  //the value of targetY at a speed of 0.11
  figuresOffsetY = lerp(figuresOffsetY, targetY, 0.11);

  //Make the scale of the figures increase smoothly toward 2
  //at a speed of 0.11
  //This makes the figures appear to grow/move closer
  figuresScale = lerp(figuresScale, 2, 0.11);

}




//This function make the figures gently bob up and down
//when the figures stress value is low.
//This is to give an effect of calm movement.
function updateFiguresCalm() {

  //When figure stress is low, there should be no horizontal..
  figuresOffsetX = 0;
  //or vertical drifting of the figures.
  figuresOffsetY = 0;


  //This variable stores the 'calm level' of the figures
  //Figure stress is between 0(calm) and 1(high stress)
  //By subtracting the current figure stress value from 1
  //we get the 'calm level'
  let calm = 1 - constrain(figureStress, 0, 1);


  //This variable stores how fast the bobbing of the figures should be.
  let bobSpeed = 0.30;

  //This variable stores how large the bobbing motion is
  let bobAmount = 3 * calm;

  //REFERENCE NOTE: The use of sin() was studied from p5 references:
  //https://p5js.org/reference/p5/sin/

  //This variable stores the actual bobbing value
  //sin is used to create the value movement
  //framecount updates the value every frame
  figureBobOffset = sin(frameCount * bobSpeed) * bobAmount;

  
  // Soft colour shift
  let calmTint = color(200, 180, 255);
  figureCalmTint = lerpColor(color(255), calmTint, calm * 0.3);
}
