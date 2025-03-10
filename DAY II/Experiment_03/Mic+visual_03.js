var time = 0;
var y = 10;
var i = 1;

function setup() {
  createCanvas(400, 400);
  background(100, 255, 255);
  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  var vol = mic.getLevel();
  
  stroke('red');
  strokeWeight(vol*50);
  fill(100,0,0);
  var size = map(vol, 0, 0.5, 10, 500);
  
  console.log(size);
  
  ellipse(time, y, size);
  
  time = time + 10;
  
  if (time >= 410) {
    y = (i * 40);
    i = i + 1;
    time = 0;
  }
  
}
