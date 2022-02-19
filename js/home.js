function setup() {
  createCanvas(3000, 3000);
  background(255);
  noStroke();

}

function mousePressed() {
  background(255);
}


function draw() {
  let r = (0);
  var g = (0);
  let b = (255);

  fill(r, g, b,200);
  rect(mouseX, mouseY, 10, 10);

}
