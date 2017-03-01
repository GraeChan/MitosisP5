var cells = [];
var counter = 0;

function setup() {
  createCanvas(700, 700);
  frameRate(60);
  
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
 background(64,164,223);
 for (var i = 0; i < cells.length; i++) {
   cells[i].move();
   cells[i].show();
   
   divide();
 }
}

function divide()
{
	{
		for (var i = cells.length-1; i >= 0; i--) 
		{
			if (counter < 5)
			{
			  cells.push(cells[i].mitosis());
			  cells.push(cells[i].mitosis());
			  cells.splice(i, 1);
			}
			
		}
		counter += 1;	
	}
}
