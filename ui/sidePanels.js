
//This function is called in sketch.js draw()
//to draw the ui panel where user can see the progress
//they make in reaching 'emotional balance' and 'winning'

function drawUIPanel() {

    //NOTE: AI USE ACKNOWLEDGEMENT: The calculation values below, used for scaling
    //were worked out using AI assistance (Microsoft Copilot)
    
    //Store the value of how to scale the panel
    //when the window is resized
    let uiScale = min(width / 800, height / 600);
    uiScale = min(uiScale, 1);

    //Panel width and height after rescaling
    let panelW = 200 * uiScale;
    let panelH = 150 * uiScale;

    //Place the panel to the top right of the artwork
    let panelX = fit.x + fit.w + 20;
    let panelY = fit.y;


    //Constrain x and y coordinates so it stays on the screen
    panelX = constrain(panelX, 0, width - panelW);
    panelY = constrain(panelY, 0, height - panelH);

    //Save current drawing state
    push();

    //Move drawing origin to panel x y position
    translate(panelX, panelY);

    //Apply the scaling setting
    scale(uiScale);

    //Draw a background for the panel
    noStroke();
    //Black that is semi transparent
    fill(0, 160);
    rect(0, 0, 200, 150, 10);

    //Draw title text
    fill(255);
    textSize(12);
    textAlign(LEFT, TOP);
    text("EMOTIONAL BALANCE", 10, 10);

    //Draw the emotional balance progress bars
    //for each group
    drawBar("Sky", skyStress, 10, 35);
    drawBar("Water", waterStress, 10, 60);
    drawBar("Bridge", bridgeStress, 10, 85);
    drawBar("Figure", figureStress, 10, 110);

    //Restore previous saved drawing state
    pop();

    //Draw the instructions panel directly underneath this panel
    drawInstructionsPanel(panelX, panelY + panelH + 10, uiScale);
}





//This function is called from drawUIPanel
//to draw the progress bars showing the effects
//of the user's input on the 'emotional balance'
//of the scream.
function drawBar(label, value, x, y) {

    //Width of the bar
    let barW = 100;
    //Height of the bar
    let barH = 8;

    //Draw a label which says which group
    //the progress bar is for (e.g. sky, water etc.)
    fill(255);
    text(label, x, y);

    //Draw the background bar in a grey colour
    fill(80);
    rect(x + 60, y + 3, barW, barH);

    //Use map() to map the stress value
    //to a width that can be shown in the bar
    let mapped = map(value, 1, 0.1, 0, barW);

    //The colour of the progress bar will change
    //based on the current stress value
    let stressColour;
    //Red for high stress
    if (value > 0.7) stressColour = color(255, 80, 80);
    //Orange for medium stress
    else if (value > 0.4) stressColour = color(255, 180, 80);
    //Green for low stress
    else stressColour = color(100, 255, 150);

    //Draw the progress colour part of the bar
    fill(stressColour);
    rect(x + 60, y + 3, mapped, barH);
}




//This function is called from drawUIPanel() to draw 
//an instructions text panel underneath the UI panel that shows progress
function drawInstructionsPanel(x, y, uiScale) {

    //Save the current drawing state
    push();

    //Move origin to panel position
    translate(x, y);

    //Apply the scaling setting
    scale(uiScale);

    //Draw a background for the panel
    noStroke();
    //Black colour that is semi transparent
    fill(0, 160);
    rect(0, 0, 200, 120, 10);

    //Draw title text
    fill(255);
    textSize(12);
    textAlign(LEFT, TOP);
    text("INSTRUCTIONS", 10, 10);

    //Draw body text
    textSize(12);
    //Intro text
    textStyle(NORMAL);
    text(
    "Help The Scream reach a state of\n" +
    "emotional balance.\n\n" +

    "Use these keys to soothe\n" +
    "the elements of the environment:\n\n",
    10,
    30
    );

    //User input keys listed in bold
    //so easier for user to refer to
    textStyle(BOLD);
    text(
        "\n" +
        "N or n: Sky\n" +
        "Left Arrow: Water\n" +
        "Down Arrow: Bridge\n" +
        "Space Bar: Human Figures",
        10,
        105
    );

    //User objective text
    textStyle(NORMAL);
    text(
        "\n" +
        "Your goal is to bring all 4 elements\n" +
        "into a state of balance.",
        10,
        180
    );

    //Restore previous saved drawing state
    pop();

}







//This function is called when the user presses
//the hint button
//It displays clear instructions of what the user
//should do to 'win'
function drawHintPanel() {

    //NOTE: AI USE ACKNOWLEDGEMENT: The calculation values below, used for scaling
    //were worked out using AI assistance (Microsoft Copilot)

    //Store the value of how to scale the panel
    //when the window is resized
    let uiScale = min(width / 800, height / 600);
    uiScale = min(uiScale, 1);

    //Panel width and height
    let panelW = 220;
    let panelH = 140;


    //Place the panel underneath the hint and reset buttons
    let panelX = 20;
    let panelY = 110; 

    //Save the current drawing state
    push();

    //Move drawing origin to x y position of panel
    translate(panelX, panelY);

    //Apply the scaling setting
    scale(uiScale);

    //Draw a background for this panel
    noStroke();
    fill(0, 160);
    rect(0, 0, panelW, panelH, 10);

    //Draw the hint text
    fill(255);
    textAlign(LEFT, TOP);
    textSize(12);
    //Title
    text("HOW TO WIN", 10, 10);
    //Main text
    text(
        "• Press all 4 keys at the same time\n" +
        "• Press quickly and repeatedly\n",
        10,
        35
    );

    //Restore previous saved drawing state
    pop();
}