/* Example Variables
Richard Taylor
2017-03-21
*/

var posX = 10;
var posY = 10;
var boxSize = 100;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255,255,255);
  rect(posX, posY, boxSize, 0.5*boxSize);
  // Draw a small square in the middle of the box
  rect(posX+boxSize/3, posY+boxSize/12, boxSize/3, boxSize/3);
  posX = posX+1;
  posY = posY+1;
}