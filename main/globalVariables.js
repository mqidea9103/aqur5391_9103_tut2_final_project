//Reference image
let img;
//Masking image used to organise the recreated image into separate sections to animate
let maskedimg;

//Stress level of the screaming figure that decides which animations occur
let stress = 0.9;

//The number of image segments the recreated image is divided into
let numSegments = 250;

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


//Parts of the image that will get removed/replaced as part of the animation
let holes = [];

//How much the figures in the image move horizontally
let figuresOffsetX = 0;
//How much the figures in the image move vertically
let figuresOffsetY = 0;

//How big or small the figures in the image become through animation
let figuresScale = 1;