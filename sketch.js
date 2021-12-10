var w = [153,193,230,90];
function weight_average(){
  var sum = w[0]+w[1]+w[2]+w[3];
var avg = sum / w.length;
console.log(avg);
}


function setup() 
{
  createCanvas(400,400);
  weight_average();
}

function draw() 
{
background(51);

}

