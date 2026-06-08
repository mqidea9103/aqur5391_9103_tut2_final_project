function drawSegments(){
     //Draw the background segments to the canvas.
    //This serves as a greyscale background to make the image more cohesive when animations occur.
    for (const segment of segmentsBG) {
        segment.draw();
    }

    //Draw the main image segments to the canvas without the outlining segments
    for (const segment of segments) {
        //Skip outlines of parts of images (e.g. outline of bridge)
        if (segment.getGroup() == "none") {
        continue; 
        }
        //Draw all the segments except for the figure segments
        if (segment.group !== "figures") {
        segment.draw();
        }
    }

    //Draw figure segments last so they appear on top
    for (const segment of figures) {
        segment.draw();
    }

}