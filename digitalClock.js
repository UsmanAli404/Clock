//make the clock depend on live timing
class DigitalClock{
  //position, color, stroke
  constructor(x,y){
    //positioning
    this.x=x;
    this.y=y;
    
    //customization
    this.clockColorFlag=false;
    this.clockColor='#000000()';
    
    this.clockStrokeFlag=false;
    this.clockStrokeColor='#FFFFFF()';
    this.clockStrokeThickness=1;
    
    this.tSize=10;
    
    //for keeping track of time
    this.second=0;
    this.minute=0;
    this.hour=0;
    
  }
  
  drawClock(){
    //need improvements here
    push();
    if(this.clockColorFlag){
      fill(this.clockColor);
    }
    if(this.clockStrokeFlag){
      stroke(this.clockStrokeColor);
      strokeWeight(this.clockStrokeThickness);
    }
    // textSize(this.tSize);
    // textWidth(this.hour+" : "+this.minute+" : "+this.second);
    // text(this.hour, this.x, this.y);
    // text(" : ", this.x+this.tSize, this.y);
    // text(this.minute, this.x+2*this.tSize, this.y);
    // text(" : ", this.x+3*this.tSize, this.y);
    // text(this.second, this.x+4*this.tSize, this.y);
    // pop();
    
    this.update();
  }
  
  //had a lot of trouble with the delay function cuz I was using millis() instead of seconds and the clock time diverged from the actual time gradually  
  update(){
    this.second=second();
    this.minute=minute();
    this.hour=hour();
  }
  
  correctOffset(){
    let totalLength=(this.x+4*this.tSize)-this.x;
    this.x=this.x-(totalLength/2);
  }
  
  setClockColor(clockColor){
    this.clockColorFlag=true;
    this.clockColor=clockColor;
  }
  
  setClockStroke(strokeColor, strokeThickness){
    this.clockStrokeFlag=true;
    this.clockStrokeColor=strokeColor;
    this.clockStrokeThickness=strokeThickness;
  }
  
  setSize(size){
    this.tSize=size;
  }
  
  setTime(sec, min, hr){
    this.second=sec;
    this.minute=min;
    this.hour=hr;
  }
}