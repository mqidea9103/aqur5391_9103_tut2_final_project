//This function makes the figures in the image move smoothly toward a target position
//as well as grow slightly in size.
//Lerp is used to move the figures slightly each frame for a smooth animation effect of 
//the figures slowly moving closer to the screaming figure in the image foreground.
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the offsets and scale below were created with AI assistance: 
  // (Microsoft Copilot), in order to achieve the desired movement effect.
function updateFiguresApproach() {

  //Make the x position of the figures move smoothly toward the value of 80
  //by a speed of 0.10
  figuresOffsetX = lerp(figuresOffsetX, 80, 0.1);
  //Make the y position of the figures move smoothly toward the value of 40
  //by a speed of 0.11
  figuresOffsetY = lerp(figuresOffsetY, 40, 0.11);
  //Make the scale of the figures increase smoothly toward 2
  //at a speed of 0.11
  //This makes the figures appear to grow/move closer
  figuresScale   = lerp(figuresScale,   2, 0.11);


}