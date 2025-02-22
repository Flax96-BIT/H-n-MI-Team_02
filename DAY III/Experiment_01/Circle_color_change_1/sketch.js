/*
Example for H(n)MI Workshop
MDEF IAAC class 2025.
With this example, we are going to learn how receive
 data from our sensors using the Web Serial library for serial communication.
Documentation: https://github.com/gohai/p5.webserial
 For this exercise you will need to have already working your soft sensor connected to a microcontroller.

 */

//Serial communication variables
let port;
let lecture = 0;
let val = 0;
let connectBtn;
let diameter;

// My Variables

/* --------- SETUP --------- */
function setup() {
  createCanvas(400, 400);
  port = createSerial();
  connectBtn = createButton("Connect Serial");
  connectBtn.position(290, 370);
  connectBtn.mousePressed(connectBtnClick);

  // My configuration
}

/* --------- DRAW --------- */
function draw() {
  readingSerial();
  serialConnected();
  
  background(200,200,200);
  
  if (val >= 1000) {
    fill(255,0,0);
    diameter = map(val, 0, 4000, 0, width);
    circle(width/2, height/2, diameter);
  }
  
  else {
    fill(random());
    diameter = map(val, 0, 4000, 0, width);
    circle(width/2, height/2, diameter);
  }
    
  
  
  
  
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* These functions are related to the webSerial library
and are responsible for stabishing connection with your USB ports and the browser. We recommend not to modify them.*/

function serialConnected() {
  if (!port.opened()) {
    connectBtn.html("Connect Serial");
  } else {
    connectBtn.hide();
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open(9600);
  } else {
    port.close();
  }
}

function readingSerial() {
  if (port.available() > 0) {
    lecture = port.readUntil("\n");
    if (lecture) {
      lecture = int(lecture);
      console.log(val);
      val = lecture;
    }
  }
}
