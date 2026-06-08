function keyPressed() {

    //If N or n is pressed
    //Decrease sky stress by 0.5
    if (key === 'N' || key === 'n') {
        adjustStress("sky", -0.05);
    }


    //If down arrow pressed
    //Decrease water stress by 0.5
    if (keyCode === DOWN_ARROW) {
        adjustStress("water", -0.05);
    }


    //If left arrow is pressed
    //Decrease bridge stress by 0.5
    if (keyCode === LEFT_ARROW) {
        adjustStress("bridge", -0.05);
    }


    //If space is pressed
    //And spacePressed is currently set to false
    if (key === ' ' && !spacePressed) {

        //Set the spacePressed is true
        spacePressed = true;

        //Decrease figure stress by 0.5
        adjustStress("figure", -0.05);
    }
}


function keyReleased() {
    //When space key is released
    //spacePressed becomes false
    if (key === ' ') {
        spacePressed = false;
    }
}








//Use built in mousePressed function to handle
//what happens when
function mousePressed() {

    //If the mouse was pressed while the
    //starting screen was showing:
    if (!started) {
        //Dimensions of continue button
        let btnW = 160;
        let btnH = 40;
        //Position of continue button
        let btnX = width / 2 - btnW / 2;
        let btnY = height / 2 + 90;

        //Check if mouse inside continue button box
        if (
            mouseX > btnX &&
            mouseX < btnX + btnW &&
            mouseY > btnY &&
            mouseY < btnY + btnH
        ) {
            //Then set the start experience boolean
            //to true
            started = true;

            //And set the show instructions pop up boolean 
            //to true
            showInstructions = true;
        }
    }


    //If the mouse was pressed while the
    //instructions pop up box was showing:
    else if (showInstructions) {

        //Value to scale the pop up box when window resized
        let scaleFactor = min(width / 700, height / 500);
        scaleFactor = min(scaleFactor, 1);

        //Unscaled panel width and height
        let panelW = 500;
        let panelH = 320;

        //Scaled panel width and height
        let scaledW = panelW * scaleFactor;
        let scaledH = panelH * scaleFactor;

        //Panel x and y position is centred
        let panelX = width / 2 - scaledW / 2;
        let panelY = height / 2 - scaledH / 2;

        //Scaled ok button position
        let btnX = panelX + (panelW / 2 - 50) * scaleFactor;
        let btnY = panelY + (panelH - 60) * scaleFactor;

        //Scaled ok button dimensions
        let btnW = 100 * scaleFactor;
        let btnH = 40 * scaleFactor;

        //Check if mouse inside 'ok' button box
        if (
            mouseX > btnX &&
            mouseX < btnX + btnW &&
            mouseY > btnY &&
            mouseY < btnY + btnH
        ) {
            //Then set the show instructions pop up boolean 
            //to false
            showInstructions = false;

        }
    }
    //Check if reset button was pressed
    else if (
        mouseX > resetBtnX &&
        mouseX < resetBtnX + resetBtnW &&
        mouseY > resetBtnY &&
        mouseY < resetBtnY + resetBtnH
    ) {
        //if it was then reset the sketch
        resetSketch();
    }

    //Check if hint button was pressed
    else if (
        mouseX > hintBtnX &&
        mouseX < hintBtnX + hintBtnW &&
        mouseY > hintBtnY &&
        mouseY < hintBtnY + hintBtnH
    ) {
        //if it was then update showHintPanel boolean
        showHintPanel = !showHintPanel;
    }
}