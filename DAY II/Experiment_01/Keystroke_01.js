// Initial tests with mouse presses and movement

var move = 0;

function setup() {
  createCanvas(400, 400);
  background('black');

  
}

function draw() {
  stroke('red');
  strokeWeight(2);
  fill(255,0,0);
  line(100, move, 300, move);
    
  stroke('black');
  strokeWeight(1);
  fill(255,255,0);

  move = move + 1;
  
}

function keyPressed() {
  if (key === 'm') {
    move = move + 20;
  }
  if (keyCode === ENTER) {
    // Code to run.
  }
}