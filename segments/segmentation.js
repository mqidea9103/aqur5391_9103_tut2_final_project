//This is a function that will sort each segment into the correct array of
//segments that make up the section of the image it is from.
//It matches the mask colour of each segment with the colour of 
// the masking image at that position,
//and puts the segment into the corresponding group.

function sortSegmentIntoGroup(sortingSegment) {
  //Get the rgb mask colour for this segment
  let sortingSegmentColour = sortingSegment.srcMaskColour;
  //Store the rgb colour into separate variables
  //for red, green and blue.
  //This is so they can be matched to the correct masking image colour.
  let r = red(sortingSegmentColour);
  let g = green(sortingSegmentColour);
  let b = blue(sortingSegmentColour);


  //These comments show which colours mean which group
  //This is so I do not forget the menaing.
  // hands = purple (204, 0, 255)
  // body = red (255, 0, 0)
  // water = blue (0, 102, 204)
  // bridge = green (0, 255, 0)
  // sky = yellow (255, 255, 0)
  // head = cyan (0, 255, 255)
  // eyes = bright blue (0, 51, 255)
  // mouth = dark blue (0, 0, 102)
  // figures = pink (255, 0, 204)


  //If colour matches the hand mask colour in masking image
  //put segment in hands array
  if (r == 204 && g == 0 && b == 255) {
    hands.push(sortingSegment);
    sortingSegment.group = "hands";
  } 
  //If colour matches the body mask colour in masking image
  //put segment in body array
  else if (r == 255 && b == 0 && g == 0) {
    body.push(sortingSegment);
    sortingSegment.group = "body";

  } 
  //If colour matches the water mask colour in masking image
  //put segment in water array
  else if (r == 0 && g == 102 && b == 204) {
    water.push(sortingSegment);
    sortingSegment.group = "water";

  } 
  //If colour matches the bridges mask colour in masking image
  //put segment in bridges array
  else if (r == 0 && g == 255 && b == 0) {
    bridge.push(sortingSegment);
    sortingSegment.group = "bridge";

  } 
  //If colour matches the sky mask colour in masking image
  //put segment in sky array
  else if (r == 255 && g == 255 && b == 0) {
    sky.push(sortingSegment);
    sortingSegment.group = "sky";

  }
  //If colour matches the head mask colour in masking image
  //put segment in head array
  else if (r == 0 && g == 255 && b == 255) {
    head.push(sortingSegment);
    sortingSegment.group = "head";

  }
  //If colour matches the eyes mask colour in masking image
  //put segment in eyes array
  else if (r == 0 && g == 51 && b == 255) {
    eyes.push(sortingSegment);
    sortingSegment.group = "eyes";

  }
  //If colour matches the mouth mask colour in masking image
  //put segment in mouth array
  else if (r == 0 && g == 0 && b == 102) {
    mouth.push(sortingSegment);
    sortingSegment.group = "mouth";

  
  }
  //If colour matches the figures mask colour in masking image
  //put segment in figures array
  else if (r == 255 && g == 0 && b == 179) {
    figures.push(sortingSegment);
    //Set 'isFigure' value to true for this segment
    //so it can be used for figure-specific animation purposes
    sortingSegment.isFigure = true;
    sortingSegment.group = "figures";

  } 

}



//Sets up the segments to draw the image with
function setupSegments() {
  //Iterate through each row and column
  for (let row = 0; row < numSegments; row++) {
    for (let col = 0; col < numSegments; col++) {

      //Make a new segment for the main image that will be animated
      let seg = new ImageSegment(row, col);
      //Add it to segments array
      segments.push(seg);
      //Now sort segment into the correct group (section of the image)
      sortSegmentIntoGroup(seg);

      
      //Setup the background segments which will apepar in greyscale
      // Create background segment
      let bg = new bgSegment(row, col);
      //Add to background segments array
      segmentsBG.push(bg);
    }
  }
}