 //This is a function that picks the colour from the middle of the segment's 
  // corresponding position in the reference image
 function sampleSegmentColour(row, col) {

    //Calculate width of each segment in the reference image
    let sampleW = img.width / numSegments;

    //Calculate height of each segment in the reference image
    let sampleH = img.height / numSegments;

    //Get x positiion of where to sample colour from
    let x = col * sampleW + sampleW / 2;
    //Get y position of where to sample from
    let y = row * sampleH + sampleH / 2;

  //Return the colour from the reference image at the position of x and y
  return img.get(x, y);;
  }


    //This is a function that picks the colour from the middle of the segment's 
  // corresponding position in the masking image
 function sampleMaskColour(row, col) {

    //Calculate width of each segment in the masking image
    let sampleW = maskedimg.width / numSegments;

    //Calculate height of each segment in the reference image
    let sampleH = maskedimg.height / numSegments;

    //Get x positiion of where to sample colour from
    let x = col * sampleW + sampleW / 2;
    //Get y position of where to sample from
    let y = row * sampleH + sampleH / 2;

    //Return the colour from the reference image at the position of x and y
    return maskedimg.get(x, y);
  }