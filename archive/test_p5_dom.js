function setup(){
	var myCanvas = createCanvas(600, 400);
	myCanvas.parent("p5Container");
}

function draw(){
	background(255);
	fill(0);
	for (var i = 0; i < 36; i++) {
		rect(20 + i * 20, 200, 20, random(-20, -100));
	};
	noFill();
	stroke(0);
	rect(20, 20, 600-20, 400-20);
}
