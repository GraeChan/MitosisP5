function Cell(pos, r, c, ic, oic) {

  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 100;
  this.c = c || color(random(50, 255), random(50, 255), random(50, 255), 100);
  this.ic = ic || color(random(50, 255), random(50, 255), random(50, 255), 100);
  this.oic = oic || color(random(50, 255), random(50, 255), random(50, 255), 100);

  this.mitosis = function() {
    //this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r*0.75, this.c, this.ic, this.oic);
    return cell;
  }

  this.move = function() {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r)
	
	fill(this.ic);
	strokeWeight(1);
	stroke(this.oic);
	
	ellipse(this.pos.x, this.pos.y, this.r/2, this.r/2)
  }

}
