var cells = [];
var timeCount = 0;
var cellCount = 0;
var divideTimer = 0;
var timer = 0;
var divideInterval;
var timeInterval;

function setup() {
  createCanvas(640, 480);
  //timer = createP('timer');
  divideInterval = setInterval(divide, 2000);
  timeInterval = setInterval(timeIt, 1000);
  frameRate(30);
  
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

function timeIt()
{
	//timer.html(timeCount);
	timeCount++
}

function draw() {
 background(0,0,0);
 for (var i = 0; i < cells.length; i++) {
   cells[i].move();
   cells[i].show();
   
   //divide();
   //die();
 }
	
  
   debug();
}

function divide()
{
	{
		for (var i = cells.length-1; i >= 0; i--) 
		{
			if (cellCount < 2400)
			{
			  cells.push(cells[i].mitosis());
			  cells.push(cells[i].mitosis());
			  cells.splice(i, 1);
			  cellCount += 1;
			}
		}
			
	}
}

function die()
{
	for (var i = cells.length-1; i >= 0; i--) 
	{
		if (timeCount > 20)
		{
		  cells.pop(cells[i].mitosis());
		  //cells.pop(cells[i].mitosis());
		  cells.splice(i, 1);
		  timeCount-=1;
		}
	}
	
}

function debug()
{
	push();
	fill(255, 255, 0);
	textSize(14);
	text("Cell Count: " + cellCount, 15, 25);
	text("Time Elapsed: " + timeCount + " Seconds", 15, 50);
	//text("FrameRate: " + frameRate().toFixed(2), 15, 75);
	pop();
}
