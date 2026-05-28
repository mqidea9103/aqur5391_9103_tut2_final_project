//This is the class for each single segment rectangle of the image
//Each segment has a row and column in the grid
//Each segment has a colour from the reference image and colour from the masking image
class ImageSegment {

  constructor(row, col) {
    
    //The column number for this segment
    this.col = col;

    //The row number for this segment
    this.row = row;

    //The colour from the original image that corresponds with the segment's position
    this.srcImgSegColour = sampleSegmentColour(this.row, this.col);

    //The colour from the masking image that corresponds with the segment's position
    //This colour is used to group the segments into different image sections
    this.srcMaskColour = sampleMaskColour(this.row, this.col);

  //These offsets are used for animating the segments (making them move)
  this.offX = 0;
  this.offY = 0;

  //This holds whether the segment will be used as a corrupted part of the image
  //which will occur for some segments in the higher stress animation
  this.isBlack = false;


  //This holds whether the segment is part of the figure section of the image
  this.isFigure = false;


  }


  

  //Return the name of which segment array this segment is included in
  //Return 'none' if it is not in any array
    getGroup() {
    if (sky.includes(this))     return "sky";
    if (water.includes(this))   return "water";
    if (bridge.includes(this))  return "bridge";
    if (figures.includes(this)) return "figures";
    if (body.includes(this))    return "body";
    if (hands.includes(this))   return "hands";
    if (head.includes(this))    return "head";
    if (eyes.includes(this))    return "eyes";
    if (mouth.includes(this))   return "mouth";
    return "none";
  }




  draw() {
     //Width of segment based on the fitted image width
    let w = fit.w / numSegments;
    //Height of segment based on the fitted image height
    let h = fit.h / numSegments;

    //The x (horizontal) position of this segment
    //offX is the animation offset of this segment
    let x = fit.x + this.col * w + this.offX;
    //The y (vertical) position of this segment
    //offY is the animation offset of this segment
    let y = fit.y + this.row * h + this.offY;

    //Add vertical movement to the y position of this segment if it is a sky segment
    y = applySkyWiggle(this, y);

    // Apply bridge shake to this segment
    let shaken = applyBridgeShake(this, x, y);
    //Give the x and y position of this segment the updated shaken values
    x = shaken.xPosition;
    y = shaken.yPosition;

    //This is to prevent the x position of the segment from leaving the fitted image area
    x = constrain(x, fit.x, fit.x + fit.w - w);
    //This is to prevent the y position of the segment from leaving the fitted image area
    y = constrain(y, fit.y, fit.y + fit.h - h);

    //If this is a 'corrupted' bridge segment, draw the corrupted segment
    //and skip drawing the normal segment
    if (drawCorruptedBridge(this, x, y, w, h)) {
      return;
      }

    //The base colour is the colour of the segment in the corresponding position of the reference image
    let base = this.srcImgSegColour;
    //Now use applySegmentColoring to make the colour of the segment tinted in line with 
    // the stress level
    //and the section of the image the segment is in
    let tintColor = applySegmentColoring(this, base);

//But if the segment is a figure segment, it will be coloured black
if (this.isFigure) {
  tintColor = color(0);
}

//If this is a background segment then it does not get tinted
if (segmentsBG.includes(this)) {
  tintColor = base; 
}

    //Make the fill and stroke colours of the segment the tintColour
    fill(tintColor);
    stroke(tintColor);



    //The default scale value is 1 which means normal size
    let currentScale = 1;

    //If this segment is part of the figure section of the image...
    if (figures.includes(this)) {
      //Then shift it by its x offset value
      x += figuresOffsetX;
      //And shift it by its y offset value
      y += figuresOffsetY;
      //And scale it by its scale value
      currentScale = figuresScale;
    }

    //Save current draw state using push
    push();

    //Move to origin of the centre of this segment
    translate(x + w/2, y + h/2);
    //Add scaling effect to this segment
    scale(currentScale);
    //Move back to origin so segment is drawn from correct position
    translate(-w/2, -h/2);
    //Draw segment rectangle
    rect(0, 0, w, h);
    //Return to pushed draw state
    pop();
  }
}