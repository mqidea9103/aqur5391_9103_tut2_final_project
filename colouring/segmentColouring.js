//This function decides the colouring for segments
//It bases this on the group/section of the image the segment is from
//seg is the segment
//base is the colour of the reference image in the corresponding position to the segment.
function applySegmentColoring(seg, base) {

  //This holds the tint colour for the segment.
  //The default value is the original colour from the reference image.  
  let tintColour = base;

  //This switch checks which group the segment has been assigned to
  //So it can give it a corresponding colour adjustment
  switch (seg.getGroup()) {

    case "sky":
      let boost = lightningFlash * 90;
      tintColour = color(
        red(base) * 0.6 + boost,
        green(base) * 0.2 + boost,
        blue(base) * 0.2 + boost
      );
      break;

    case "water":
      tintColour = color(
        red(base) * 0.5,
        green(base) * 0.2,
        blue(base) * 0.3
      );
      break;

    case "body":
      tintColour = color(
        red(base) * 2,
        green(base) * 0.2,
        blue(base) * 0.2
      );
      break;

    case "hands":
      tintColour = color(
        red(base) * 0.1,
        green(base) * 0.4,
        blue(base) * 0.6
      );
      break;

    case "head":
      tintColour = color(
        red(base) * 0.1,
        green(base) * 0.4,
        blue(base) * 0.8
      );
      break;

    case "eyes":
    case "mouth":
      tintColour = color(
        red(base) * 0.9,
        green(base) * 0.5,
        blue(base) * 0.2
      );
      break;

    case "bridge":
      tintColour = color(
        red(base) * 0.5,
        green(base) * 0.2,
        blue(base) * 0.3
      );
      break;
  }

  //Return the chosen colour so the segment can be drawn with it.
  return tintColour;
}