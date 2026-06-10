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

    //This holds which group (section of the artwork) the segment is in
    this.group = "none";

    //For bridge segments, this holds whether or not 
    //the segment is a non-corrupted bridge segment
    this.normalBridge = false;
  }


  

  //This function returns the name of which group this segment is included in
  getGroup() {
    return this.group;
  }



  //This function controls how the segment is drawn to canvas
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


    //This is to prevent the x position of the segment from leaving the fitted image area
    x = constrain(x, fit.x, fit.x + fit.w - w);
    //This is to prevent the y position of the segment from leaving the fitted image area
    y = constrain(y, fit.y, fit.y + fit.h - h);


    //The default scale value is 1 which means normal size
    let currentScale = 1;

    //Colour segment will be filled with
    let fillColour;


                 //Check if segment needs a group-specific animation applied:\\

    //Add vertical movement to the y position of this segment if it is a sky segment
    if (this.group === "sky") {
      y = applySkyWiggle(this, y);
    }


    // Apply bridge shake to this segment if it is a bridge segment
    if (this.group === "bridge") {
      let shaken = applyBridgeShake(this, x);
      //If bridge stress is high and if this segment is
      //a normal bridge segment (i.e. not a 'corrupted' one) then
      //expand the width of this segment so that the 
      //unsightly pixel outlines of the figures are somewhat reduced.
      if (this.normalBridge == true && bridgeStress > 0.5) {
        w = w * 20;
      }
      //Give the x position of this segment the updated shaken value
      x = shaken.xPosition;
    }
    
    //If this is a 'corrupted' bridge segment, draw the corrupted segment
    //and skip drawing the normal segment
    if (drawCorruptedBridge(this, x, y, w, h)) {
      return;
    }


    //If this segment is part of the figure section of the image...
    //if figure stress is high...
    if (this.group === "figures" && figureStress > 0.5 ) {
      //Then shift it by its x offset value
      x += figuresOffsetX;
      //And shift it by its y offset value
      y += figuresOffsetY;
      //And scale it by its scale value
      currentScale = figuresScale;
      //if figure stress is low..
    } else if (this.group === "figures" && figureStress < 0.5 ) {
      //add figure bobbing offset to vertical position (y) for 
      //gentle figure bobbing animation
       y += figureBobOffset;
    }

    //If this segment is a body segment and fiure stress level is high
    if (this.group === "body" && figureStress > 0.5) {
      //Change scale to be multiplied by bodyBreath value
      //This is for extra movement when stress level is high
      currentScale *= bodyBreath;
    } 
     

   
    //Use applySegmentColoring to make the colour of the segment in line with 
    //the stress level and the section of the image the segment is in
    fillColour = applySegmentColoring(this);

  
    //Add calm bridge glow to bridge segments when stress is low
    if (this.group === "bridge" && bridgeStress < 0.5) {

      //Use a soft blue colour for glow
      let glowColor = color(150, 180, 255);

      //Use linear interpolation to blend the fill and glow colours
      //at a rate determined by bridgeGlowAmount
      fillColour = lerpColor(fillColour, glowColor, bridgeGlowAmount * 0.35);
    }


  
                                      ////// DRAW THE SEGMENT\\\\\\\

    //Make the fill colour of the segment rectangle the colour stored in fillColour
    fill(fillColour);
    noStroke();


    //Use the following transforms only if segment is a scaled segment (a figure/bodysegment)
    if (currentScale !== 1) {

      //Save current draw state using push
      push();

      //Move to origin of the centre of this segment
      translate(x + w/2, y + h/2);
      //Add scaling effect to this segment
      scale(currentScale);
      //Move back to origin so segment is drawn from correct position
      translate(-w/2, -h/2);

      //Draw segment rectangle
      rect(0, 0, w + 0.8, h + 0.8);

      //Return to pushed draw state
      pop();

    } 
    else {//if this is not a scaled figure or body segment...
      //Then just go straight to drawing the rectangle without transformations for normal segments.
      //Add to width and height to cover pixel noise.
      rect(x, y, w + 12, h + 5);
    }
  }
}