
var r = 0 ;
var g = 50;
var b=255;

function setup(){

  createCanvas(300,400);
}


function draw(){

  r = map (mouseX, 50  ,  10  , 0   , 100 )
  g = map (mouseX, 50  ,  100 , 100 , 200 )
  b = map (mouseX, 122 , 225  , 200 , 300 ) 

  background (r,g,b)

  
  ellipse (mouseX,mouseY,30,30)


 
}