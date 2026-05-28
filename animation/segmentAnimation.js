//This function adds vertical movement to sky segments
function applySkyWiggle(seg, yPosition) {
  //If the segment is not part of the sky segments, return the original yPosition
  if (!sky.includes(seg)){
    return yPosition;
  } 
  //If it is part of the sky segments,
  //add a sin movement:
  //frameCount increases every frame and is multiplied by 100 to make the movement change quickly over time
  //multiplying segment column by 0.3 makes each column move a little differently
  //*2 controls how big the vertical movement is
  //NOTE: AI USE: Microsoft Copilot was used to genereate the below calculation to produce the desired style of sky movement.
  return yPosition + sin(frameCount * 100 + seg.col * 0.3) * 2;
}

//This function adds shaking movement to the bridge segments
function applyBridgeShake(seg, xPosition, yPosition) {
    //If the segment is not part of the bridge, return the original x and y positions
  if (!bridge.includes(seg)) {
        return { xPosition, yPosition };
    } 

  //If the segment is part of the bridge segments add the value of the brdige shake offsets
  xPosition += bridgeShakeX;
  yPosition += bridgeShakeY;

  //Return the new values of xPosition and yPosition
  return { xPosition, yPosition };
}

//This function draws a corrupted bridge segment
//It does this by replacing the nomral rectangle with a stretched black shape
function drawCorruptedBridge(seg, x, y, w, h) {

    //If the segment has not been flagged as 'corrupted
    //then return false so the normal drawing of the segment continues
  if (!seg.isBlack) {
    return false;
  }

  //Save the current draw state with push
  //NOTE: AI USE: The below transformation logic was calculated with the assistance of AI (Microsoft Copilot).
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