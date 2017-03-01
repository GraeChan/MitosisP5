var cells = [];
var counter = 0;

function setup() {
  createCanvas(700, 700);
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
 background(200);
 for (var i = 0; i < cells.length; i++) {
   cells[i].move();
   cells[i].show();
   
   divide();
 }
}

function divide()
{
	if (counter < 10)
	{
		for (var i = cells.length-1; i >= 0; i--) 
		{
			//if (cells[i].clicked(mouseX, mouseY)) {
			  cells.push(cells[i].mitosis());
			  cells.push(cells[i].mitosis());
			  cells.splice(i, 1);
			//}
		}
		counter += 1;
	}
}

function mousePressed() {
  for (var i = cells.length-1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}
