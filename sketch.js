




function setup() {
  createCanvas(1700,770);

  
  angleMode(degrees);
  
}

function draw() {
  background("black");
  
  
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  textSize(25);
  fill("Yellow")
  text("The Red hand represents the Second hand.", 100,50);
  text("The Green hand represents the Minute hand.", 100,80);
  text("The Blue hand represents the Hour hand.", 100,110);

  textSize(50);
  fill("CYAN")
  text("This is a CLOCK.", 100,600);
  text("This is a CLOCK.", 1200,500);
  text("This is a CLOCK.", 1300,200);
  text("This is a CLOCK.", 70,300);

  
  translate(850,385);
  rotate(-90);


  strokeWeight(8);
  stroke("Red");
  noFill();
  var sec = map(sc,0,60,0,360);
  arc(0,0,620,620,0,sec);

  strokeWeight(8);
  stroke(0,255,0);
  noFill();
  var min = map(mn,0,60,0,360);
  arc(0,0,490,490,0,min);

  strokeWeight(8);
  stroke(0,0,255);
  noFill();
  var h = map(hr%12,0,12,0,360);
  arc(0,0,360,360,0,h);

  push();
  rotate(sec);
  strokeWeight(7);
  stroke(255,0,0);
  line(0,0,100,0);
  pop();

  
  
  push();
  rotate(min);
  strokeWeight(7);
  stroke(0,255,0);
  line(0,0,75,0);
  pop();


  

  push();
  rotate(h);
  strokeWeight(7);
  stroke("blue");
  line(0,0,50,0);
  pop();

  //point
  push();
  stroke("white");
  point(0,0);
  pop();

  rect(850, 385, 550, 550);

  drawSprites();
}
