//This is the class for each single segment rectangle of the background image
//Each segment has a row and column in the grid
//Each segment has a colour from the reference image
class bgSegment {

   constructor(row, col) {
    
     //The column number for this segment
    this.col = col;

    //The row number for this segment
    this.row = row;

    //The colour from the original image that corresponds with the segment's position
    this.bgsegColour = this.sampleColour();

    this.group = "background";

  }


   //This is a function that picks the colour from the middle of the segment's 
  // corresponding position in the reference image
  //It then turns it into a grayscale so the background can be unobtrusive black and white.
  sampleColour() {
    
    //Calculate width of each segment in the reference image
    let sampleW = img.width / numSegments;

    //Calculate height of each segment in the reference image
    let sampleH = img.height / numSegments;

    //X position of the pixel being sample for colour in the reference image
    let x = floor(this.col * sampleW + sampleW / 2);
    //Y position of the pixel being sampled for colour in the reference image
    let y = floor(this.row * sampleH + sampleH / 2);


    //Converts the x y position of the pixel into an index for the pixels array of img
    //REFERENCE NOTE: The calculation for accessing pixel index was found from source: 
    // https://idmnyu.github.io/p5.js-image/#index
   let index = (x + y * img.width) * 4;

   //Store the red, green, and blue values from the pixel at this index
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];

    //Convert the rgb to greyscale
    //Add the RGB values together and divide them by 3 
    //to get the average brightness; this is the greyscale intensity.
    let grey = (r + g + b) / 3;
    //R, G and B now use the same value so the colour is grey. 
    //An alpha value of 20 is used to make the colour somewhat transparent
    //this is so the background image is not overly noticeable.
    return [grey, grey, grey, 90];   
  }

  


  draw() {
    // Calculate position and size at draw time, based on the current fit
    //Calculate how wide each segment is based on current fit
    let w = fit.w / numSegments;
    //Calculate how tall each segment is based on current fit
    let h = fit.h / numSegments;

    //Calculate the x position for this segment
    let x = fit.x + this.col * w;
    //Calculate the y position for this segment
    let y = fit.y + this.row * h;

    //Set fill and set no stroke and draw the background segment rectangle.
    fill(this.bgsegColour);
    noStroke();
    rect(x, y, w, h);
  }

}