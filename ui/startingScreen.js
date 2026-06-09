//This function will draw the screen the user is shown when
//the program is initially started
//It is called from sketch.js draw()
function drawStartScreen() {

    //Make the whole screen black
    background(0);

    //White text colour
    fill(255);

    //Center text
    textAlign(CENTER, CENTER);

    //Title text
    textSize(18);
    text("WARNING", width / 2, height / 2 - 80);

    //Information text
    textSize(12);
    text(
        "This experience contains flashing lights,\n" +
        "and rapid visual changes.\n\n" +
        "It may not be suitable for people with photosensitive epilepsy or similar.\n\n" +
        "Do you wish to continue?",
        width / 2,
        height / 2
    );

    //Set 'continue' button width and height
    let btnW = 160;
    let btnH = 40;

    //Set x y position of button
    let btnX = width / 2 - btnW / 2;
    let btnY = height / 2 + 90;

    //Button background colour and button box
    fill(40);
    rect(btnX, btnY, btnW, btnH, 8);

    //Draw button text in corect position
    fill(255);
    textSize(14);
    text("YES, CONTINUE", width / 2, btnY + btnH / 2);
}









//This function draws a pop up box that explains the
//artwork and the objective + controls to the user.
//It is called when the user presses the 'continue' button
//in the initial starting screen.
function drawInstructionsPopup() {

    //Make the whole screen dimmed
    //using a semi transparent black rectangle
    fill(0, 180);
    rect(0, 0, width, height);

    //NOTE: AI USE ACKNOWLEDGEMENT: The calculation values below, used for scaling
    //were worked out using AI assistance (Microsoft Copilot)

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


    //Save current drawing state
    push();

    //Move drawing origin to panel x y
    translate(panelX, panelY);

    //Applying the scaling setting
    scale(scaleFactor);

    //Draw the box of the pop up
    noStroke();
    fill(20, 30, 50);
    rect(0, 0, panelW, panelH, 12);


    //Draw the title text
    fill(255);
    textAlign(CENTER, TOP);
    textSize(18);
    text("HOW TO INTERACT", panelW / 2, 20);


    //Draw the introductory text
    textSize(12);
    fill(255);
    textAlign(CENTER, TOP);
    textStyle(NORMAL);
    text(
    "The Scream is experiencing extreme emotional turmoil,\n" +
    "caused by the ever present trials and tribulations of human life.\n\n" +

    "Use these keys to soothe the elements of the environment:",
    panelW / 2,
    60
    );

    //Draw the user controls text
    textStyle(BOLD);
    text(
        "N or n: Sky\n" +
        "Left Arrow : Water\n" +
        "Down Arrow : Bridge\n" +
        "Space Bar : Human Figures",
        panelW / 2,
        130
    );

    //Draw the user objective text
    textStyle(NORMAL);
    text(
        "Your goal is to bring all 4 elements into a state of balance.\n" +
        "Be careful: balancing one element may destabilise others.",
        panelW / 2,
        220
    );

   

    //Draw an 'ok' button
    fill(40);
    rect(panelW / 2 - 50, panelH - 60, 100, 40, 8);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("OK", panelW / 2, panelH - 40);

    //Restore previous saved drawing settings
    pop();
}
