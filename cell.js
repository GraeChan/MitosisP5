function Cell(pos, r, c, ic) {

  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 100;
  this.c = c || color(random(50, 255), random(50, 255), random(50, 255), 100);
  this.ic = ic || color(random(50, 255), random(50, 255), random(50, 255), 100);

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  this.mitosis = function() {
    //this.pos.x += random(-this.r, this.r);
    var cell = new Cell(this.pos, this.r*0.75, this.c, this.ic);
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
	//strokeWeight(1);
	//stroke(random(50, 255), random(50, 255), random(50, 255));
	
	ellipse(this.pos.x, this.pos.y, this.r/2, this.r/2)
  }

}
