//This value will be used to control horizontal movement of the bridge
let bridgeShakeX = 0;

//This value will be used to rotate the canvas
//when drawing 'corrupted' bridge segments
let bridgeShakeRotation = 0;





//This function updates the shaking of the bridge as a whole
//It uses the bridge stress value to decide
//how much the bridge should move.
//Higher stress value means more shaking. Lower stress value means less shaking.
function updateBridgeShake() {
  
  //Make the shaking animation seem stronger by multiplying the stress value
  //This is to give the animation a more dramatic effect.
  let amplifiedStress = bridgeStress * bridgeStress; 

  //If the shaking is very small, stop movement so the bridge is still when stress is low.
  if (amplifiedStress < 0.01) {
    //By setting the offset values to 0, all bridge movement is stopped.
    bridgeShakeX = 0;
    bridgeShakeRotation = 0;
    return;
  }

  //Maximum amount of horizontal bridge movement when stress is at highest value (1.0)
  let maxX = 85;

  //Maximum rotational value in radians
  let maxRotation = 0.12; 

  //REFERENCE NOTE: The use of sin() was studied from p5 references:
  //https://p5js.org/reference/p5/sin/

  // This value will be used to move the bridge horizontally in a smooth wave motion
  //sin creates the motion
  //frameCount increases every frame so the movement changes over time 
  //amplifiedStress controls the movement strength based on stress value
  //maxX controls the maximum distance the bridge can move
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the bridge shake variable below was created with AI assistance (Microsoft Copilot)
  bridgeShakeX = amplifiedStress * maxX * sin(frameCount * 1.2);

  //This value will be used to rotate the canvas to create
  //variation in the corrupted bridge segments positions
  //MaxRotation controls how far the bridge can rotate
  //The rotation is greater when amplifiedStress value is higher
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the bridge rotation variable below was created with AI assistance (Microsoft Copilot)
  bridgeShakeRotation = amplifiedStress * maxRotation * sin(frameCount * 50) * 5;
}






//This function makes random bridge segments turn black
//this is to give the image a 'corrupted' look when stress is high.
function updateBridgeCorruption() {

  //This value controls how many corrupted areas appear in the bridge
  let numCorruptSegments = 8;


  // When stress level is lower than 0.6, remove all corrupted segments
  if (bridgeStress < 0.6) {
    //This loops through all segments in bridge array and sets the value of isBlack to false
    for (let seg of bridge) seg.isBlack = false;
    //Stop function here because there should not be any 'corruption' at this stress level
    return;
  }


  //This clears any previously corrupted segments before creating new ones
  //This changes the corrupted segments every frame
  for (let seg of bridge) { 
    seg.isBlack = false;
  }

  //This sets the isBlack value to true for random segments
  //The number of segments is set from numCorruptSegments
  for (let i = 0; i < numCorruptSegments; i++) {

    //This chooses a random index of bridge array (floor makes the random number a whole number to be used as an index)
    let index = floor(random(bridge.length));

    //Sets the isBlack value of the random segment to true
    //This will be used to draw this segment differently when the bridge segments are drawn
    bridge[index].isBlack = true;
  }

}




//This function makes the bridge slowly glow when stress is low
function updateBridgeGlow() {

  //If the bridge stress value is 0.5 or higher...
  if (bridgeStress >= 0.5) {
    //Then the bridge should not glow
    bridgeGlowAmount = 0;
    //so stop here.
    return;
  }

  //Set the horizontal bridge movement value to 0
  //to ensure bridge stops shaking when bridge stress is low
  bridgeShakeX = 0;


  //REFERENCE NOTE: The use of sin() was studied from p5 references:
  //https://p5js.org/reference/p5/sin/

  //This variable stores a soothing glow effect value between 0 and 1
  //sin is used to generate the smooth movement of the value
  //map makes sure the value is between 0 and 1.
  //This is done to make a gentle glow effect that fades in and out.
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the bridge glow amount variable below was created with AI assistance (Microsoft Copilot)
  bridgeGlowAmount = map(sin(frameCount * 0.2), -1,  1, 0, 1 );
}







//This function adds shaking movement to the bridge segments
function applyBridgeShake(seg, xPosition) {
    //If the segment is not part of the bridge, return the original x position
    if (seg.group !== "bridge") {
        return { xPosition };
    } 

    //If the segment is part of the bridge segments add the value of the bridge shake offset
    xPosition += bridgeShakeX;

    //Set the normalBridge property to true for the segment (seg)
    //so its width can be expanded when it is drawn.
    seg.normalBridge = true;
    //Return the new value of xPosition
    return { xPosition };
}





//This function draws a corrupted bridge segment
//It does this by replacing the normal rectangle with a stretched black shape
function drawCorruptedBridge(seg, x, y, w, h) {

    //If the segment has not been flagged as black
    //then return false so the normal drawing of the segment continues
    if (!seg.isBlack) {
      return false;
    }

    //Save the current draw state with push
    //NOTE: AI USE: The below transformation values were calculated with the assistance of AI (Microsoft Copilot).
    push();
    //Move origin to centre of this segment
    translate(x + w/2, y + h/2);
    //Rotate the canvas by the value of bridgeShakeRotation
    rotate(bridgeShakeRotation);
    //Move origin back to where it previously was
    translate(-w/2, -h/2);
    //Set fill colour to black
    fill(0);
    //Set stroke colour to black
    stroke(0);
    //Draw long flat black rectangle
    rect(0, 0, w * 50, h * 5);
    //Return to the pushed drawing state
    pop();

    //Return true so that a normal segment does not get drawn on top of this one
    return true;
}