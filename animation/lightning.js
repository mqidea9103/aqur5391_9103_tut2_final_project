//This stores the value of how bright the lightningFlash is
//0 meaning no lightning and 1 meaning full brightness
let lightningFlash = 0;

//This function will be called in sketch.js draw() to update whether
//lightning flashes appear in the sky or not.
function updateLightning() {

  //If sky stress value  is lower than 0.6 there will be no lightning.
  if (skyStress < 0.6) {
    //The lightningFlash value is reset to 0
    lightningFlash = 0;
    //Stop function here.
    return;
  }

  //Make a randomly triggering lightning flash
  //random() will give a value between 0 and 1
  //if random() value is less than sky stress * 0.3
  //then a flash happens this frame.
  //The higher the sky stress value, the higher the chance of a lightning flash.
  if (random() < skyStress * 0.3) {
    //Set lightning brightness to full for this frame
    lightningFlash = 1;   
  }

  //Make the lightning flash fade out smoothly.
  //Multiplying by 50% makes the brightness lower gradually each frame.
  //This is to make it a smooth fading animation.
  lightningFlash *= 0.5;

}