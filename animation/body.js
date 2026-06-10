
//This function is used in sketch.js to update the animation of
//the screaming figure's body
function updateBody(){
  //If the figure stress level is greater than 0.5...
  if (figureStress > 0.5) {
    //bodyBreath is a variable that controls
    //how much the body is animated when figure stress level is high.

    //REFERENCE NOTE: The use of sin() was studied from p5 references:
    //https://p5js.org/reference/p5/sin/

    //This calculation results in a value that moves up and down smoothly
    //sin() is used to create that movement
    //Because frameCount changes every frame, the value keeps moving.
    //*0.9 controls the speed
    //*2 controls how big the movement is
    //This is so a kind of 'breathing' effect is made where the 
    //figure's body appears to moves outward and inward repeatedly.
    bodyBreath = 1 + sin(frameCount * 0.9) * 2; 
  } else {
    //If the figure stress value is low
    //then the screaming figure's body will just stay still.
    bodyBreath = 1;
  }
}
