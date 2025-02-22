var move = 0;

function setup() {
  createCanvas(400, 400);
  background('black');

  
}

function draw() {
  stroke('blue');
  strokeWeight(5);
  fill(255,0,0);
  //line(100, move, move, 300);
  ellipse(move, 200, move, 300)
    
  stroke('black');
  strokeWeight(4);
  fill(255,255,0);

  move = move + 0.5;
  
}

function keyPressed() {
   if (key === 'm') {
    move = move + 10;
  }
  if (keyCode === ENTER) {
    clear();
    background('red');
    move = 0;
  }
}