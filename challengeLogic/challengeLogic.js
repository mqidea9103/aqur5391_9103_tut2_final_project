//This function is called in sketch.js draw() and 
//updates the stress values of each group of segments.
//Changes in value will occur based on user interaction
function updateStressValues() {

    //Use linear interpolation to ease the stress values to their target stress values
    //at the speed of stressEaseSpeed.
    //This is to make animations smooth rather than sudden and choppy.
    skyStress = lerp(skyStress, skyTargetStress, stressEaseSpeed);
    waterStress = lerp(waterStress, waterTargetStress, stressEaseSpeed);
    bridgeStress = lerp(bridgeStress, bridgeTargetStress, stressEaseSpeed);
    figureStress = lerp(figureStress, figureTargetStress, stressEaseSpeed);

    //Constrain stress levels to stay between 0.1 and 1 to prevent animation errors
    skyStress = constrain(skyStress, 0.1, 1);
    waterStress = constrain(waterStress, 0.1, 1);
    bridgeStress = constrain(bridgeStress, 0.1, 1);
    figureStress = constrain(figureStress, 0.1, 1);


    //Constrain target stress levels to stay between 0.1 and 1 to prevent animation errors
    skyTargetStress = constrain(skyTargetStress, 0.1, 1);
    waterTargetStress = constrain(waterTargetStress, 0.1, 1);
    bridgeTargetStress = constrain(bridgeTargetStress, 0.1, 1);
    figureTargetStress = constrain(figureTargetStress, 0.1, 1);

}







//This function makes the target stress value change for one group.
//This is done instead of just updating the stress value itself so that
//there is a target stress value to use in the update stress value function,
//to make stress changes and the corresponding animations appear smoother.
function adjustStress(group, amount) {

    if (group === "sky") {
        //Increase or decrease the sky target stress
        skyTargetStress += amount;

        //If amount is less than 0 then it means
        //the sky stress is lowering
        //So to make it challenging...
        if (amount < 0) {
            //Slightly increase water and bridge target stress
            waterTargetStress += abs(amount) * 0.3;
            bridgeTargetStress += abs(amount) * 0.2;
        }
    }


    if (group === "water") {
        //Increase or decrease the water target stress
        waterTargetStress += amount;

        //If amount is less than 0 then it means
        //the water stress is lowering
        //So to make it challenging...
        if (amount < 0) {
            //Slightly increase figure and bridge target stress
            bridgeTargetStress += abs(amount) * 0.3;
            figureTargetStress += abs(amount) * 0.2;
        }
    }

    if (group === "bridge") {
        //Increase or decrease the bridge target stress
        bridgeTargetStress += amount;

        //If amount is less than 0 then it means
        //the bridge stress is lowering
        //So to make it challenging...
        if (amount < 0) {
            //Slightly increase figure and sky target stress
            figureTargetStress += abs(amount) * 0.3;
            skyTargetStress += abs(amount) * 0.2;
        }
    }

    if (group === "figure") {
        //Increase or decrease the figure target stress
        figureTargetStress += amount;

        //If amount is less than 0 then it means
        //the figure stress is lowering
        //So to make it challenging...
        if (amount < 0) {
            //Slightly increase sky and water target stress
            skyTargetStress += abs(amount) * 0.3;
            waterTargetStress += abs(amount) * 0.2;
        }
    }

    //Constrain target stress levels to stay between 0.1 and 1 to prevent animation errors
    skyTargetStress = constrain(skyTargetStress, 0.1, 1);
    waterTargetStress = constrain(waterTargetStress, 0.1, 1);
    bridgeTargetStress = constrain(bridgeTargetStress, 0.1, 1);
    figureTargetStress = constrain(figureTargetStress, 0.1, 1);
}





//This function is called in sketch.js draw()
//to check if the user has fulfilled the interaction objectives
function checkWinCondition() {

    //Because linear interpolation is used in updating the stress values,
    //I use a small margin of error here so if the stress value is within 0.03 of 0.1
    //then the user will still 'win'
    return (
        (skyStress - 0.1) < 0.03 &&
        (waterStress - 0.1) < 0.03 &&
        (bridgeStress - 0.1) < 0.03 &&
        (figureStress - 0.1) < 0.03
    );
}




//This function resets all relevant variables
//to their starting states
//It is called when user clicks "Reset" button
function resetSketch() {

    challengeWon = false;
    showHintPanel = false;

    skyStress = 1;
    waterStress = 1;
    bridgeStress = 1;
    figureStress = 1;

    skyTargetStress = 1;
    waterTargetStress = 1;
    bridgeTargetStress = 1;
    figureTargetStress = 1;
}











