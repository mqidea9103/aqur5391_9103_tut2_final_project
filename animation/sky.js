//Holds array of star objects
//Each star is an object with an x coordinate, y coordinate, and brightness level.
let stars = [];

//Holds value of number of stars to put in the sky
let numStars = 80;

//This function makes star objects and stores them in the stars array
//Each star is given a random position and brightness level
function setupStars() {
    //Iterate numStars times to create that number of stars and put them in stars array
    for(let i = 0; i < numStars; i++) {
        stars.push({
            //Random x position of star
            x: random(1),
            //Random y position of star 
            y: random(1),
            //The starting brightness level of the star
            brightness: random(150, 255),
            //NOTE: AI USE ACKNOWLEDGEMENT: The below logic for reversing the flickering of the star was created with the use of AI: Microsoft Copilot.
            //Value that decides whether the star is dimming (-1) or brightening (+1)
            flicker: random([-1, 1]) 
        });
    }
}


//This function draws the stars every frame.
//The stars only appear on sky segments of the image.
//The stars brightness will flicker
//The stars will fade as the stress value lowers.
function drawStars() {

     //This value controls how transparent the stars are
     //As stress increases they become more transparent
    let alpha = map(stress, 0, 0.5, 255, 0, true);


    //Iterate through each star object in stars array
    for (let star of stars) {

        //Convert the stars x and y coordinates into column and row positions
        let col = floor(star.x * numSegments);
        let row = floor(star.y * numSegments);

        //Get the segment at this grid location using col and row values
        let seg = segments[row * numSegments + col];

        //Stars are only drawn on sky segments.
        //The function should stop if the current segment is not a sky segment
        if (!sky.includes(seg)) {
            continue;
        }

       
        //Change star brightness in line with flicker value
        star.brightness += star.flicker * 0.5;

        //Reverse the flicker direction (dimming/brightening) if the brightness
        // value becomes too high or too low.
        //NOTE: AI USE ACKNOWLEDGEMENT: The below logic for reversing the flickering of the star was created with the use of AI: Microsoft Copilot.
        if (star.brightness > 255 || star.brightness < 150) {
            star.flicker *= -1;
        }

        //This is the horizontal the position value of where the star will be drawn
        let starX = fit.x + col * (fit.w / numSegments);
        //This is the vertical the position value of where the star will be drawn
        let starY = fit.y + row * (fit.h / numSegments);

        //For the star colour, use the brightness value for red and green
        //Give blue a value 0f 255 so the stars have a blue tint.
        fill(star.brightness, star.brightness, 255, alpha);
        noStroke();

        //Make the star size change over time using sine wave
        //frameCount controls how fast the star changes size
        //star brightness makes variation among the stars so they don't all look the same
        //*1.5 controls how much the size changes
        //2.5 is the starting size of the star
        //NOTE: AI USE ACKNOWLEDGEMENT: The calculation/value for the size variable below was created using AI assistance (Microsoft Copilot)
        let size = 2.5 + sin(frameCount * 0.2 + star.brightness) * 1.5;

        //Draw the star as a circle
        circle(starX, starY, size);
    }
}



function updateSkyFlow() {
    
    //Holds value used to animate the sky smoothly over time
    let skyFlowTiming = frameCount * 0.9;

    //Iterate through each segment of sky array
    for (let seg of sky) {

    //Make horizontal wave movement
    //sin gives a number to create the back and forth movement
    //skyFlowTiming is used to make the movement change over time
    //seg.row is used to make each row move a little differently so the whole sky doesn't move
    //in one huge block.
    //*12 controls how much the segment moves horizontally
    let targetX = sin(skyFlowTiming + seg.row * 0.15) * 12;

    //Make vertical wave movement
    //cos gives a number to create up and down movement
    //skyFlowTiming is used to make the movement change over time
    //seg.col is used to make each column move a little differently
    //*0.5 controls how much the segment moves vertically
    let targetY = cos(skyFlowTiming + seg.col * 0.1) * 0.5;

   // Make the the segment's x offset move smoothly toward targetX at a speed of 20%
    seg.offX = lerp(seg.offX, targetX, 0.2);

   // Make the the segment's y offset move smoothly toward targetY at a speed of 20%
    seg.offY = lerp(seg.offY, targetY, 0.2);
    
  }
}