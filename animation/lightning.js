//This stores the value of how bright the lightningFlash is
//0 meaning no lightning and 1 meaning full brightness
let lightningFlash = 0;


function updateLightning() {

  
  //If stress is lower than 0.7 there will be no lightning
  //The lightningFlash value is reset to 0 and the function is stopped.
  if (stress < 0.7) {
    lightningFlash = 0;
    return;
  }

  //Make a randomly triggering lightning flash
  //random() will give a value between 0 and 1
  //if random() value is less than stress * 0.3
  //then a flash happens this frame.
  //The higher the stress value, the higher the chance of a lightning flash.
  if (random() < stress * 0.3) {
    //Set lightning brightness to full for this frame
    lightningFlash = 1;   
  }

  //Make the lightning flash fade out smoothly.
  //Multiplying by 50% makes the brightness lower gradually each frame.
  //This makes for a smooth fading animation.
  lightningFlash *= 0.5;
}