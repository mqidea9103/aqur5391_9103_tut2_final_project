//Load the reference image and the masking image before anything else
function preload() {
  //Load reference image that the program will redraw and animate
  img = loadImage('assets/Edvard_Munch_The_Scream.jpeg');
  //Load masking image to use for sorting image segments into separate image sections
  maskedimg = loadImage('assets/thescreammask.png');
}



function setup() {
  //Make the canvas the same size as the browser window
  createCanvas(windowWidth, windowHeight);

  //Calculate the fit for when the window and canvas are resized
  calculateFit();

  //Setup the stars that appear when the stress level is lower
  setupStars();


  // Create all image segments (foreground + background)
  setupSegments();
 
}




function draw() {
  //Set the background to black
  background(0);

  //Call animation update functions 
  // [>>>>This needs to be changed later so they only occur when stress is high<<<<<<<]
  updateWaterRipples();
  updateBridgeShake();  
  updateBridgeCorruption();
  updateSkyFlow();
  updateFiguresApproach();
  updateLightning();

  //Draw the background segments to the canvas
  //This is the greyscale semi transparent background
  for (const segment of segmentsBG) {
    segment.draw();
  }


  //Draw the main image segments to the canvas without outlining segments
  for (const segment of segments) {
    //Skip outlines of parts of images (e.g. outline of bridge)
    if (segment.getGroup() == "none") {
      continue; 
    }
    //Draw all the segments except for the figure segments
    if (!figures.includes(segment)) {
      segment.draw();
    }
  }

  //Draw figure segments last so they appear on top
  for (const segment of figures) {
    segment.draw();
  }

  //Draw stars in the sky when stress value is low
  drawStars();
}