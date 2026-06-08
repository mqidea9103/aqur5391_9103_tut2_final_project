//These button position/size variables are made global
//so that they can be used in mousePressed function
let resetBtnX;
let resetBtnY;
let resetBtnW;
let resetBtnH;

let hintBtnX;
let hintBtnY;
let hintBtnW;
let hintBtnH;


//This functions draws the 'reset' and 'hint' buttons
//It is called in sketch.js draw()
function drawUIButtons() {

    //NOTE: AI USE ACKNOWLEDGEMENT: The calculation values below, used for scaling
    //were worked out using AI assistance (Microsoft Copilot)
    
    //Value to scale the buttons when window resized
    let uiScale = min(width / 800, height / 600);
    uiScale = min(uiScale, 1); // never scale above 1

    //Button size after scaling
    let btnW = 160 * uiScale;
    let btnH = 40 * uiScale;

    //Put buttons on left panel beside artwork
    let btnX = 20; 
    //Align near top of artwork
    let btnY1 = fit.y +  10;
    //Hint button is below reset button
    let btnY2 = fit.y + btnH + 20; 

    
    //Constrain x y values so button never goes off-screen
    btnX = constrain(btnX, 0, width - btnW);
    btnY1 = constrain(btnY1, 0, height - btnH);
    btnY2 = constrain(btnY2, 0, height - btnH);


    //Draw reset button
    fill(40);
    rect(btnX, btnY1, btnW, btnH, 8);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(14 * uiScale);
    text("Reset", btnX + btnW / 2, btnY1 + btnH / 2);

    //Draw hint button
    fill(40);
    rect(btnX, btnY2, btnW, btnH, 8);
    fill(255);
    text("Help😭", btnX + btnW / 2, btnY2 + btnH / 2);

    //Button positions and sizes to be used for mousePressed function
    resetBtnX = btnX;
    resetBtnY = btnY1;
    resetBtnW = btnW;
    resetBtnH = btnH;

    hintBtnX = btnX;
    hintBtnY = btnY2;
    hintBtnW = btnW;
    hintBtnH = btnH;
}





