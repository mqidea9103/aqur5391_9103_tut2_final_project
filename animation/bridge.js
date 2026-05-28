//These are offsets which control how much the bridge moves
//This value controls horizontal movement
let bridgeShakeX = 0;
//This value controls vertical movement
let bridgeShakeY = 0;
//This value controls rotational movement
let bridgeShakeRotation = 0;



//This function updates the shaking of the bridge as a whole
//It uses the 'stress' level of the screaming figure to decide
//how much the bridge should move.
//Higher stress value means more shaking. Lower stress value means less shaking.
function updateBridgeShake() {


  //Constrain the stress value to stay between 0 and 1
  //This prevents unintended animations if the stress level is too high or low
  let constrainedStress = constrain(stress, 0, 1);
  
  //Make the shaking animation seem stronger by multiplying the stress value
  //This is to give the animation a more dramatic effect.
  let amplifiedStress = constrainedStress * constrainedStress; 

  //If the shaking is very small, stop movement so the bridge is still when stress is low.
  if (amplifiedStress < 0.01) {
    //By setting the offset values to 0, all bridge movement is stopped.
    bridgeShakeX = 0;
    //bridgeShakeY = 0;
    bridgeShakeRotation = 0;
    return;
  }

  //These values are the maximum amount of bridge movement when stress is at highest value (1.0)
  //Maximum horizontal movement
  let maxX = 45;
  //let maxY = 20;
  //Maximum rotational movement in radians
  let maxRotation = 0.12; 

  // This value will be used to move the bridge horizontally in a smooth wave motion
  //sin creates the motion
  //frameCount increases every frame so the movement changes over time 
  //amplifiedStress controls the movement strength based on stress value
  //maxX controls the maximum distance the bridge can move
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the bridge shake variable below was created with AI assistance (Microsoft Copilot)
  bridgeShakeX = amplifiedStress * maxX * sin(frameCount * 1.2);

  //This value will be used to make the bridge rotate left and right
  //MaxRotation controls how far the bridge can rotate
  //The rotation is stronger when amplifiedStress value is higher
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the bridge rotation variable below was created with AI assistance (Microsoft Copilot)
  bridgeShakeRotation = amplifiedStress * maxRotation * sin(frameCount * 0.9);
}





//This function makes random bridge segments turn black
//this is to give the image a 'corrupted' look when stress is high.
function updateBridgeCorruption() {
  // When stress level is lower thne 0.7, remove all corrupted segments
  if (stress < 0.7) {
    //This loops through all segments in bridge array and set the value of isBlack to false
    for (let seg of bridge) seg.isBlack = false;
    //Stop function here because there should not be any 'corruption' at this stress level
    return;
  }


  //This value controls how many corrupted areas appear in the bridge
  let numCorruptSegments = 6;

  //This clears any previously corrupted segments before creating new ones
  //This changes the corrupted segments every frame
  for (let seg of bridge) seg.isBlack = false;

  //This sets the isBlack value to true for random segments
  //The number of segments is set from patches
  for (let i = 0; i < numCorruptSegments; i++) {
    //This chooses a random index of bridge array (floor makes the random number a whole number to be used as an index)
    let index = floor(random(bridge.length));
    //Sets the isBlack value of the random segment to true
    //This will be used to draw this segment differently when the bridge segments are drawn
    bridge[index].isBlack = true;
  }
}