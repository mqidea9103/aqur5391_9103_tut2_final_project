//Reference image
let img;
//Masking image used to organise the recreated image into separate sections to animate
let maskedimg;

//Stress level of the screaming figure that decides which animations occur
//let stress = 0.3;

//Stress levels for controlliing the animations of each separate section of the image
let skyStress = 1;
let waterStress = 1;
let bridgeStress = 1;
let figureStress = 1;

//These are target stress levels that will be used for easing animations
let skyTargetStress = 1;
let waterTargetStress = 1;
let bridgeTargetStress = 1;
let figureTargetStress = 1;

//The stress easing speed
let stressEaseSpeed = 0.02;

//The number of image segments the recreated image is divided into
let numSegments = 200;

//The image segments used to recreate the image
let segments = [];

//The image segments used to recreate the image for the greyscale background
let segmentsBG = [];


//Object to hold the position and size of how the image will be drawn to canvas
let fit = { x: 0, y: 0, w: 0, h: 0 };


//Separate arrays for the separate image segments that make up each different section of the image
let sky = [];
let water = [];
let bridge = [];
let figures = [];
let mouth = [];
let eyes = [];
let head = [];
let hands = [];
let body = [];

//How much the figures in the image move horizontally
let figuresOffsetX = 0;
//How much the figures in the image move vertically
let figuresOffsetY = 0;

//How big or small the figures in the image become through animation
let figuresScale = 1;

//Whether or not the space bar key is pressed
let spacePressed = false;


// Controls how strong the bridge glow is
let bridgeGlowAmount = 0;

//How much the figures will move up and down in calm animation
let figureBobOffset;

//Controls how much the screaming figure's body is animated when figure stress level is high
let bodyBreath = 1;

//Array that stores the water sparkle objects
let waterSparkles = [];

//The maximum number of water sparkles allowed to be drawn
let maxWaterSparkles = 150; // adjust for density

//Panel that will hold emotional balance meters
//to provide user with feedback
//as well as the instructions
let stressPanel;

//The visual emotional balance meters
let skyBar;
let waterBar;
let bridgeBar;
let figureBar;


//Whether or not the user has completed the objective of the challenge
let challengeWon = false;

//Whether or not the user has pressed ok to start the artwork experience
let started = false;

//Whether or not the insturctions pop up should be shown
let showInstructions = false;

//Whether or not the hint panel of text should be showing
let showHintPanel = false;



