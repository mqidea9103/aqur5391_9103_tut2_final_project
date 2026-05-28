//This is a built in event function to p5.js
//It is triggered whenever the window is resized
//I use it to resize the image so it can match the window size
function windowResized(){
    //Use built in p5.js windowWidth and windowHeight
    //to resize the canvas to each new window width and window height
  resizeCanvas(windowWidth, windowHeight);

  //Recalculate the correct fit for the image to fit in the new window size properly
  //This has to be done because when the window is resized the image will no longer fit
  calculateFit();
}


// This function calculates the size and position of the image so its fits the canvas correctly
//without distortion, and is centred within the canvas 
function calculateFit() {
    //This variable holds the aspect ratio of the reference image which I use to draw the image
    //segments from
    //This is used to discern whether the image height or width is greater
  let imgAspect = img.width / img.height;

  //This variable holds the canvas aspect ratio
  //The canvas aspect ratio is needed in deciding how to scale the image
  let canvasAspect = width / height;

  //Check if the image aspect ratio is greater than the canvas aspect ratio
  //This decides if the image more 'wide' or more 'tall'
  //and this is the deciding factor in how to scale the image
  if (imgAspect > canvasAspect) {

    //If the image aspect is greater than the canvas aspect
    //make the image width the same as the canvas width
    fit.w = width;

    //In order for the image to not become distorted
    //calculate the height using aspect ratio
    fit.h = width / imgAspect;

  } else {
    //In this case the image is 'taller' than the canvas
    //so set the image height to be the same as the canvas height
    fit.h = height;

    //In order for the image to not become distorted
    //calculate the width using aspect ratio
    fit.w = height * imgAspect;
  }

  //Centre the image horizontally
  fit.x = (width - fit.w) / 2;

  //Centre the image vertically
  fit.y = (height - fit.h) / 2;
}