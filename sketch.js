// creating the variables
var p1, p2;

function preload(){
  boardImg = loadImage('board.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  board = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  board.addImage(boardImg);
  board.scale = 4;
}

function draw() {
  background(0);  
  drawSprites();
}