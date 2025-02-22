let prevTime;
let actualTime;
let x;
let y;

function setup() {
  createCanvas(640, 400);
  prevTime = millis();
  x=20;
  y=height/2;
}

function draw() {
  //background(220);
  actualTime = millis();
  
  if ( (actualTime - prevTime) >= 1000){
    print("1 second!");
    prevTime = actualTime;
    x = x+20;
  }
 
  circle(x, y, 10);
  
}

function keyPressed(){
  if(key == 's'){
    save("myData" + frameCount + ".jpg");
  }
}