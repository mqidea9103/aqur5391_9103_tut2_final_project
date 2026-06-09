//This function decides the colouring for segments
//It bases this on the group/section of the image the segment is from
//seg is the segment
function applySegmentColoring(seg) {

  //The base colour is the colour of the segment in the corresponding position of the reference image
  let base = seg.srcImgSegColour;

  //This array stores four blue toned colours
  //These are used to create unity among the colours of the image
  let palette = [
    //dark blue
    color(20, 30, 50), 
    //mid blue  
    color(40, 60, 90), 
    //light blue  
    color(120, 160, 200),
    //glow
    color(200, 220, 255) 
  ];


  //This stores a measurement of how bright the base colour from
  //the reference image is.
  //REFERENCE NOTE: The use of brightness was learned from p5 references:
  //https://p5js.org/reference/p5/brightness/
  let imgBrightness = brightness(base);

  
  //Choose one of the colours from the palette array
  //based on the brightness level of the segment
  //If brightness is low (it is darker)..
  if (imgBrightness < 50) {
    //then use darker palette colour
    base = palette[0];
  }
  //If brightness is medium level
  else if (imgBrightness < 100) { 
    //use mid palette colour
    base = palette[1];
  }
  //If brightness is high
  else if (imgBrightness < 180) {
    //use the light palette colour
    base = palette[2];
  }
  //Otherwise..
  else {
    //use the glow colour
    base = palette[3];
  }

    
  //Recolour the base colour using the palette colour
  //But also use lerp to blend it with a greyish blue colour
  //This is done to reduce the jarring pixel details,
  //as well as to make the recoloued image appear
  //more unified as a whole.
  base = lerpColor(base, color(30, 30, 40), 0.3);


  //If this is a background segment then it will not get coloured
  if (seg.group === "background") {
    return base;
  }
  //If the segment is a figure segment, it will be coloured black
  else if (seg.isFigure) {
      return color(0);
    } 

  
  //This will hold the colour for when the segement group's stress level is low
  let calmColour = base;
  //This will hold the colour for when the segment group's stress level is high
  let stressedColour = base;


  //This switch checks which group the segment has been assigned to
  //So it can give it a corresponding colour adjustment
  switch (seg.getGroup()) {

    case "sky":
      let boost = lightningFlash * 90;
      stressedColour = color(
        red(base) * 0.1 + 10+ boost,
        green(base) * 0.2 + boost,
        blue(base) * 0.1 + 10 + boost
      );
      calmColour = color(
        red(base) * 0.01 + 5, 
        green(base) * 0.2 + 5, 
        blue(base) * 0.9 + 5
      );
      break;

    case "water":
      stressedColour = color(
        red(base) * 0.5 + 18,
        green(base) * 0.2,
        blue(base) * 0.8 + 20
      );
      calmColour = color(
        red(base) * 0.7 + 5, 
        green(base) * 0.7 + 5, 
        blue(base) * 0.9 + 5
      );
      break;

    case "body":
      stressedColour = color(
        red(base) * 0.2,
        green(base) * 0.2,
        blue(base) * 0.2
      );
      calmColour = color(
        red(base) * 0.5, 
        green(base) * 0.8, 
        blue(base) * 1.9
      );
      break;

    case "hands":
      stressedColour = color(
        red(base) * 0.1 + 30,
        green(base) * 0.4 + 30,
        blue(base) * 0.6 + 30
      );
      calmColour = color(
        146, 
        150, 
        255, 
        90
      );
      break;

    case "head":
      stressedColour = color(
        red(base) * 0.1 + 40,
        green(base) * 0.4 + 40,
        blue(base) * 0.8 + 40
      );
      calmColour = color(
        246, 
        250, 
        255, 
        90
      );
      break;

    case "eyes":
      stressedColour = color(
        red(base) * 100,
        green(base) * 0,
        blue(base) * 0
      );
      calmColour = color(
        red(base) * 0.1, 
        green(base) * 0.8, 
        blue(base) * 2.2
      );
      break;

    case "mouth":
      stressedColour = color(
        red(base) * 0.9 + 15,
        green(base) * 0.5 + 15,
        blue(base) * 0.2 + 15
      );
      calmColour = color(
        246, 
        250, 
        255, 
        90
      );
      break;

    case "bridge":
      stressedColour = color(
        red(base) * 0.3,
        green(base) * 0.5 + 30,
        blue(base) * 0.3
      );
      calmColour = color(
        red(base) * 0.07, 
        green(base) * 0.2, 
        blue(base) * 0.7
      );
      break;
  }


  //This will store the stress value of this segment
  let thisSegmentStress = 0;

  //This switch-case is used to assign the right stress value
  //to thisSegmentStress 
  //based on this segment's group.
  switch (seg.group) {
    case "water":
      thisSegmentStress = waterStress;
      break;

    case "bridge":
      thisSegmentStress = bridgeStress;
      break;

    case "sky":
      thisSegmentStress = skyStress;
      break;

    case "body":
    case "head":
    case "eyes":
    case "hands":
    case "figures":
      thisSegmentStress = figureStress;
      break;
  }  
  

  //This stores the colour this segment will be coloured
  //Use lerp to blend the calm colour with the stressed colour,
  //based on the value of thisSegmentStress
  let finalTint = lerpColor(calmColour, stressedColour, thisSegmentStress);

  
  //Return the final colour
  return finalTint;
 
}