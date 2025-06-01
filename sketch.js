let canvasWidth, canvasHeight;
let secondsDial, minutesDial, hoursDial, digitalClock;

let patternIndex = 0;
let patterns = [];
let patternNames = [];

function setup() {
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);

  let centerX = canvasWidth / 2;
  let centerY = canvasHeight / 2;
  let baseRadius = min(canvasWidth, canvasHeight) / 2;

  secondsDial = new Dial(centerX, centerY, baseRadius, 's');
  secondsDial.setLine('rgb(255,216,0)', 3);
  secondsDial.setPoints('rgb(255,216,0)', 3);

  minutesDial = new Dial(centerX, centerY, 0.875 * baseRadius, 'm');
  minutesDial.setLine('rgb(255,216,0)', 5);

  hoursDial = new Dial(centerX, centerY, 0.5 * baseRadius, 'h');
  hoursDial.setLine('rgb(255,216,0)', 6);

  digitalClock = new DigitalClock(centerX, centerY + 0.8 * baseRadius);
  digitalClock.setClockColor('rgb(255,216,0)');
  digitalClock.setClockStroke('rgb(255,216,0)', 2);
  digitalClock.setSize(18);
  digitalClock.correctOffset();
  digitalClock.setTime(second(), minute(), hour());
  
  patterns = [
    spiralPattern,
    rosePattern, 
    lissajousPattern, 
    rosePatternVariation, 
    starburstPattern, 
    nestedLoopsPattern,
    waveRingPattern,
    interferencePattern,
    timePattern
];
  patternNames = [
    'Spiral',
    'Rose', 
    'Lissajous', 
    'Rose Variation', 
    'Starburst',
    'Nested Loops',
    'Wave Ring',
    'interference',
    'time'
];
}

function draw() {
  background(0);
  let centerX = canvasWidth / 2;
  let centerY = canvasHeight / 2;
  let baseRadius = min(canvasWidth, canvasHeight) / 2;

  push();
  stroke('rgb(255,216,0)');
  strokeWeight(3);
  noFill();
  ellipse(centerX, centerY, baseRadius + 30, baseRadius + 30);
  pop();

  secondsDial.drawDial();
  minutesDial.drawDial();
  hoursDial.drawDial();

  push();
  stroke('rgb(255,216,0)');
  strokeWeight(12);
  point(centerX, centerY);
  pop();

  digitalClock.drawClock();
  
  push();
  fill('rgb(255,216,0)');
  noStroke();
  textAlign(CENTER);
  textSize(18);
  text(patternNames[patternIndex], canvasWidth / 2, canvasHeight - 30);
  pop();

}

function spiralPattern(i, angle, diameter, k) {
  let r = (diameter / 2) * (i * 0.01 + 0.5 * sin(k));
  return {
    x: r * cos(i * angle + k),
    y: r * sin(i * angle + k)
  };
}

function rosePattern(i, angle, diameter, k) {
  let r = (diameter / 2) * cos(4 * i * angle + k);
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function lissajousPattern(i, angle, diameter, k) {
  let r = diameter / 2;
  return {
    x: r * sin(i * angle * 3 + k),
    y: r * sin(i * angle * 2 + k)
  };
}

function rosePatternVariation(i, angle, diameter, k) {
  let m = 5 + 2 * sin(k * 0.5); // modulate petal count
  let r = (diameter / 2) * sin(m * i + k);
  return {
    x: r * cos(i * angle + k),
    y: r * sin(i * angle + k)
  };
}

function starburstPattern(i, angle, diameter, k) {
  let m = 7 + 2 * cos(k);
  let r = (diameter / 2) * abs(cos(m * i + k));
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function nestedLoopsPattern(i, angle, diameter, k) {
  let m = 4 + sin(k);
  let r = (diameter / 2) * sin(m * i + k) * cos(m * i + k);
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function waveRingPattern(i, angle, diameter, k) {
  let m = 6 + cos(k);
  let r = (diameter / 2) + 20 * sin(i * m + k);
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function interferencePattern(i, angle, diameter, k) {
  let m1 = 5 + 2 * sin(k * 0.8);
  let m2 = 7 + cos(k * 0.4);
  let r = (diameter / 2) * sin(i * m1 + k) + (diameter / 4) * sin(i * m2 + k);
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function timePattern(i, angle, diameter, k) {
  // Even though time is dynamic, using k allows consistent animation
  let dynamicK = k * 10;
  let r = (diameter / 2) * sin(i * dynamicK);
  return {
    x: r * cos(i * angle),
    y: r * sin(i * angle)
  };
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    patternIndex = (patternIndex + 1) % patterns.length;
  } else if (keyCode === LEFT_ARROW) {
    patternIndex = (patternIndex - 1 + patterns.length) % patterns.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
}
