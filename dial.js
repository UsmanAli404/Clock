//use second() to update everything
//can plot any graph I want
class Dial{
  constructor(centerX, centerY, diameter, type, {
    angle=0,
    angleChange=0,
    fillFlag = false,
    circleColor = 'black',
    circleStrokeFlag = false,
    circleStrokeColor = 'black',
    circleStrokeThickness = 1,
    lineColor = 'red',
    lineThickness = 1,
    displayPointsFlag=false,
    numPoints=0
  } = {}) {
    // Positioning and speed
    this.centerX = centerX;
    this.centerY = centerY;
    this.diameter = diameter;

    // Appearance customization
    //circle
    this.fillFlag = fillFlag;
    this.circleColor = circleColor;
    this.circleStrokeFlag = circleStrokeFlag;
    this.circleStrokeColor = circleStrokeColor;
    this.circleStrokeThickness = circleStrokeThickness;
    //line
    this.lineColor = lineColor;
    this.lineThickness = lineThickness;

    //type
    this.type=type;
    this.angle=0;
    this.updateAngle();
    //points
    this.displayPointsFlag=displayPointsFlag;
    this.pointThickness=1;
    this.pointColor='rgb(0,0,0)';
    this.k=0;
    //initialization
    this.x = this.centerX;
    this.y = this.centerY-diameter/2;
  }
  
  drawDial(){
    this.updateDial();
    this.drawDialFrame();
  }
    
  drawDialFrame(){
    push();
    if(this.fillFlag){
      fill(this.circleColor);
    } else{
      noFill();
    }
    if(this.circleStrokeFlag){
      stroke(this.circleStrokeColor);
      strokeWeight(this.circleStrokeThickness);
    } else {
      noStroke();
    }
    ellipse(this.centerX, this.centerY, this.diameter, this.diameter);
    pop();

    if(this.displayPointsFlag){
      this.drawPoints();
    }

    push();
    if(this.lineColor){
      stroke(this.lineColor);
    }
    strokeWeight(this.lineThickness);
    line(this.centerX, this.centerY, this.x, this.y);
    pop();
  }
  
  drawPoints(){
    if (!patterns.length) return;

    push();
    stroke(this.pointColor);
    strokeWeight(this.pointThickness);

    let currentPattern = patterns[patternIndex];

    for(let i=1; i<100; i++){
      let { x, y } = currentPattern(i, this.angle, this.diameter, this.k);
      point(this.centerX + x, this.centerY + y);
    }

    pop();
    
    this.k += 0.0006;
    if (this.k > 10000) {
      this.k = 0;
    }
  }
  
  updateAngle(){
    //single unit is two_pi/60 for seconds and minutes
    if(this.type=='s'){
      this.angle = (second()*TWO_PI/60)- TWO_PI/4;
    } else if(this.type=='m'){
      this.angle = (minute()*TWO_PI/60)- TWO_PI/4;
    } else if(this.type=='h'){
      this.angle = (hour()*TWO_PI/12)-TWO_PI/4;
    }
  }

  updateDial(){
    this.updateAngle();
    this.x=this.centerX+(this.diameter/2)*cos(this.angle);
    this.y=this.centerY+(this.diameter/2)*sin(this.angle);
        
    if(this.angle>=TWO_PI){
      this.angle=0;
    }
  }
  
  // Setters
  setCenter(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
  }
  
  setCenterX(centerX) {
    this.centerX = centerX;
  }

  setCenterY(centerY) {
    this.centerY = centerY;
  }

  setDiameter(diameter) {
    this.diameter = diameter;
  }

  setAngle(angle) {
    this.angle = angle;
  }

  setAngleChange(angleChange) {
    this.angleChange = angleChange;
  }

  setCircleColor(circleColor) {
    this.fillFlag = true;
    this.circleColor = circleColor;
  }

  setCircleStroke(circleStrokeColor, circleStrokeThickness) {
    this.circleStrokeFlag = true;
    this.circleStrokeColor = circleStrokeColor;
    this.circleStrokeThickness = circleStrokeThickness;
  }
  
  setLine(lineColor, lineThickness){
    this.lineColor = lineColor;
    this.lineThickness = lineThickness;
  }
  
  setPoints(pointColor, pointThickness){
    this.displayPointsFlag=true;
    this.pointThickness=pointThickness;
    this.pointColor=pointColor;
  }
}