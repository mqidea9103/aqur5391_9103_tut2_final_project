//This function makes the motion animation of the water segments
//Every water segment has wave movement added to it based on noise and stress value
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
//By using noise, sine waves and stress value, a swirling motion is created.
function applySegmentChaos(seg, t) {

  //Holds the 'chaotic' level of the water movements.
  //When stress is lower, chaos is lower and there is less water movement
  //When stress is higher, chaos is higher and there is more water movement
  //Therefore to have an adequate range of chaos levels, the min/max stress values are mapped to min/max chaos values
  let chaos = map(stress, 0, 1, 0, 25);

  
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
  //noise(..) gives a number between 0 and 1
  //that number is converted into an angle in radians 
  //by multiplying it by TWO_PI (1 full circle/360 degrees)
  //and multipying that by 4 makes it 0-4 full circles
  //This means there are many possible angles, thus creating a swirling movement.
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the angle variable below was created with AI assistance (Microsoft Copilot)
  let angle = noise(noiseX, noiseY, t * 0.55) * TWO_PI * 4;

  //Horizontal swirling movement based on angle value multiplied by chaos value
  //cos() creates the circular movement
  let swirlX = cos(angle) * chaos;
  //Vertical swirling movement based on angle value multiplied by chaos value
  //sin() creates the circular movement
  let swirlY = sin(angle) * chaos;

  
  //Horizontal wave motion,  created using sine, to layer on top of swirl motion
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the waveX variable below was created with AI assistance (Microsoft Copilot)
  let waveX = sin(seg.row * 0.40 + t * 4.8) * chaos * 0.7;

  //Vertical wave motion, created using cos, to layer on top of swirl motion
  //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the waveY variable below was created with AI assistance (Microsoft Copilot)
  let waveY = cos(seg.col * 0.45 + t * 4.5) * chaos * 0.5;

  //This value is the combined horizontal swirl and horizontal wave values
  //to create final x target offset for the water animation
  let targetX = swirlX + waveX;

  //This value is the combined vertical swirl and vertical wave values
  //to create final y target offset for the water animation
  let targetY = swirlY + waveY;


// Move the segment offset toward the target using linear interpolation.
// Move toward targetX each frame at a speed of 0.72
seg.offX = lerp(seg.offX, targetX, 0.72);
// Move toward targetY each frame at a speed of 0.72
seg.offY = lerp(seg.offY, targetY, 0.72);
}