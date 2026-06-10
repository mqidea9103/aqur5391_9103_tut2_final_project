//This function is called in sketch.js draw()
//It updates the motion animation of the water segments
function updateWaterRipples() {

  //This is the time value for the water animation
  //This needs to be slower than frameCount so water movement is smooth
  let waterMovementTiming = frameCount * 0.1;

  //This loops through all the segments in the water array
  for (let seg of water) {
    //For each segment, use below function to add motion and use the waterMovementTiming vallue
    applySegmentChaos(seg, waterMovementTiming);
  }
 
}



//This function calculates the movement for each water segment
//By using perlin noise, sin, and water stress value, a swirling motion is created.
function applySegmentChaos(seg, timing) {

  //Holds the 'chaotic' level of the water movements.
  //When stress is lower, chaos is lower and there is less water movement
  //When stress is higher, chaos is higher and there is more water movement
  //Therefore to have an adequate range of chaos levels, the min/max stress values are mapped to min/max chaos values
  let chaos = map(waterStress, 0, 1, 0, 25);

  
  //This value controls how much the noise waves stretch or condense
  //When the scale is lower, the noise waves are smoother,
  //When the scale is higher, the noise waves are 'noisier'/more detailed
  let scale = 0.050;

  //Holds value of segment column converted into a noise coordinate
  //This is to give each segment a noise value
  let noiseX = seg.col * scale;

  //Holds value of segment row converted into a noise coordinate
  //This is to give each segment a noise value
  let noiseY = seg.row * scale;

  //Holds a smooth random angle value created using Perlin noise
  //noise() gives a number between 0 and 1
  //that number is converted into an angle in radians 
  //by multiplying it by TWO_PI (1 full circle/360 degrees)
  //and multipying that by 4 makes it 0-4 full circles
  //This means there are many possible angles, thus creating a swirling movement
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the angle variable below was created with AI assistance (Microsoft Copilot)
  let angle = noise(noiseX, noiseY, timing * 0.55) * TWO_PI * 4;

  //REFERENCE NOTE: The use of cos() was studied from p5 references:
  //https://p5js.org/reference/p5/cos/

  //REFERENCE NOTE: The use of sin() was studied from p5 references:
  //https://p5js.org/reference/p5/sin/


  //Use cos() to create horizontal swirling movement based on angle value, multiplied by chaos value
  let swirlX = cos(angle) * chaos;
  //Use sin() to create vertical swirling movement based on angle value, multiplied by chaos value
  let swirlY = sin(angle) * chaos;

  
  //Horizontal wave motion,  created using sin(), to layer on top of swirl motion
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the waveX variable below was created with AI assistance (Microsoft Copilot)
  let waveX = sin(seg.row * 0.40 + timing * 4.8) * chaos * 0.7;

  //Vertical wave motion, created using cos(), to layer on top of swirl motion
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the waveY variable below was created with AI assistance (Microsoft Copilot)
  let waveY = cos(seg.col * 0.45 + timing * 4.5) * chaos * 0.5;

  //This value is the combined horizontal swirl and horizontal wave values
  //to create final x target offset for the water animation
  let targetX = swirlX + waveX;

  //This value is the combined vertical swirl and vertical wave values
  //to create final y target offset for the water animation
  let targetY = swirlY + waveY;


  //Move the segment offset toward the target using linear interpolation
  //Move toward targetX each frame at a speed of 0.72
  seg.offX = lerp(seg.offX, targetX, 0.72);
  //Move toward targetY each frame at a speed of 0.72
  seg.offY = lerp(seg.offY, targetY, 0.72);

}






//This function is called in sketch.js setup() to create the water sparkles
//This only needs to be done once so it is done in setup()
function setupWaterSparkles() {

  //Create an empty array to store the water sparkles
  waterSparkles = [];

  //Iterate maxWaterSparkles number of times
  for (let i = 0; i < maxWaterSparkles; i++) {
    //to create that many water sparkles and add them to
    //waterSparkles array
    waterSparkles.push(makeWaterSparkle());
  }

}






//This helper function is used by setupWaterSparkles to create
//the water sparkles that will be used in the program
function makeWaterSparkle() {

  //This stores a random water segment from the water array
  let seg = random(water);

  //Use the random segment to return
  //a sparkle object
  return {
    //x position of sparkle
    x: (seg.col + random()) / numSegments,
    //y position of sparkle
    y: (seg.row + random()) / numSegments,
    //the size of this sparkle
    size: random(1, 3),
    //the speed this sparkle sparkles
    speed: random(0.25, 0.6),
    //wave offset to differentiate sparkles
    offset: random(TWO_PI)
  };

}








//This function is called in sketch.js draw() to update the amount of water sparkles
//It depends on the water stress value
function updateWaterSparkles() {

  //If the water stress value is high: over or equal to 0.5 then,
  //there should be no sparkles
  if (waterStress >= 0.5){
    //stop function here
    return;
  } 


  //Stores how many sparkles there should be
  //This value is based on the current water stress level
  //by mapping the calmness level (1 - waterStress) to the max number of sparkles possible
  //and then make it a whole number
  let targetCount = floor(map(1 - waterStress, 0, 1, 0, maxWaterSparkles));

  //Check if the number of water sparkles in the water sparkles array
  //is less than the target count value
  while (waterSparkles.length < targetCount) {
    //while it is less, add more water sparkles
    waterSparkles.push(makeWaterSparkle());
  }

  //Check if the number of water sparkles in the water sparkles array
  //is greater than the target count value
  while (waterSparkles.length > targetCount) {
    //while its is more, remove water sparkles
    waterSparkles.pop();
  }

  //Iterate through each sparkle in the water sparkles array
  //to make each sparkle move slightly
  //The idea is to make a shimmering effect.
  for (let sparkle of waterSparkles) {


    //REFERENCE NOTE: The use of sin() was studied from p5 references:
    //https://p5js.org/reference/p5/sin/
   
    //REFERENCE NOTE: The use of cos() was studied from p5 references:
    //https://p5js.org/reference/p5/cos/

    //Give sparkle x and y values movement using sin and cos
    //use the sparkle's offset value to create differentiation between sparkles
    sparkle.x += sin(frameCount * 0.01 + sparkle.offset) * 0.0005;
    sparkle.y += cos(frameCount * 0.01 + sparkle.offset) * 0.0005;


    //Constrain sparkle x and y values to keep them
    //inside the image and inside the water area
    sparkle.x = constrain(sparkle.x, 0, 1);
    sparkle.y = constrain(sparkle.y, 0, 1);
  }

}






//This function is used to draw all the water sparkles in the array
function drawWaterSparkles() {

  //If the water stress value is high: over 0.5..
  if (waterStress >= 0.5) {
    //then stop function here as no sparkles should be drawn
    return;
  }
  
  //No stroke outlines for sparkles
  noStroke();

  //Iterate through each sparkle in waterSparkles
  for (let sparkle of waterSparkles) {

    //REFERENCE NOTE: The use of sin() was studied from p5 references:
    //https://p5js.org/reference/p5/sin/

    //Stores the value to give the sparkle a flicker effect
    //calculated using sin with this sparkle's speed and offset values
    let flicker = sin(frameCount * sparkle.speed + sparkle.offset);

    //pulse stores value that uses perlin noise to give
    //some sparkles a smooth appearance of twinkling (looking brighter than others)
    let pulse = noise(frameCount * 0.15 + sparkle.offset * 10);

    //use map to give a bigger value range for pulse
    //this is to make more noticeable twinkles
    pulse = map(pulse, 0, 1, 0.2, 2.5);  


    //Use flicker and pulse to make the transparency level of the sparkle
    let alpha = map(flicker, -1, 1, 0, 255) * pulse;

    //Constrain to keep within valid alpha values
    alpha = constrain(alpha, 0, 255);

    //Make sparkles a soft blue colour
    fill(100, 120, 255, alpha);

    //Change sparkle's x y coordinates to resizable pixel coordinates
    let x = fit.x + sparkle.x * fit.w;
    let y = fit.y + sparkle.y * fit.h;

    //Draw the sparkle as a circle
    circle(x, y, sparkle.size);
  }

}
