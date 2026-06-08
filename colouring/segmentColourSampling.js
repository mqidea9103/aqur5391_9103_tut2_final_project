//This is a function that picks the colour from the middle of the segment's 
// corresponding position in the reference image
function sampleSegmentColour(row, col) {

  //Calculate width of each segment in the reference image
  let sampleW = img.width / numSegments;

  //Calculate height of each segment in the reference image
  let sampleH = img.height / numSegments;

  //X position of the pixel being sampled for colour in the reference image
  let x = floor(col * sampleW + sampleW / 2);
  //Y position of the pixel being sampled for colour in the reference image
  let y = floor(row * sampleH + sampleH / 2);

  //Converts the x y position of the pixel into an index for the pixels array of img
  //REFERENCE NOTE: The calculation for accessing pixel index was learned from source: 
  //https://idmnyu.github.io/p5.js-image/#index
  let index = (x + y * img.width) * 4;

  //Store the red, green, blue and alpha values from the pixel at this index
  let r = img.pixels[index];
  let g = img.pixels[index + 1];
  let b = img.pixels[index + 2];
  let a = img.pixels[index + 3];

  //Return the colour from the reference image at the index position in the pixels array
  return color(r, g, b, a);

}




//This is a function that picks the colour from the middle of the segment's 
//corresponding position in the masking image
function sampleMaskColour(row, col) {

  //Calculate width of each segment in the masking image
  let sampleW = maskedimg.width / numSegments;

  //Calculate height of each segment in the reference image
  let sampleH = maskedimg.height / numSegments;

  
  //X position of the pixel being sample for colour in the masking image
  let x = floor(col * sampleW + sampleW / 2);
  //Y position of the pixel being sampled for colour in the masking image
  let y = floor(row * sampleH + sampleH / 2);


  //Converts the x y position of the pixel into an index for the pixels array of img
  //REFERENCE NOTE: The calculation for accessing pixel index was learned from source: 
  //https://idmnyu.github.io/p5.js-image/#index
  let index = (x + y * maskedimg.width) * 4;

  //Store the red, green, blue and alpha values from the pixel at this index
  let r = maskedimg.pixels[index];
  let g = maskedimg.pixels[index + 1];
  let b = maskedimg.pixels[index + 2];
  let a = maskedimg.pixels[index + 3];

  //Return the colour from the reference image at the index position in the pixels array
  return color(r, g, b, a);
}