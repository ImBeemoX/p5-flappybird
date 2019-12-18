var bird
var pipes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	bird = new Bird()
	pipes.push(new Pipe())
	textSize(50);
}

function draw() {
	background(0)
	bird.update()
	bird.show()

	for(var i = 0; i < pipes.length; i++){
		pipes[i].show()
		pipes[i].update()
		if(pipes[i].offscreen()){
			pipes.splice(i, 1)
		}
		pipes[i].hits(bird)
	}

	if(frameCount % 70 == 0){
		pipes.push(new Pipe())
	}
	text("Score: " + bird.score, 70, 70)
}

function keyPressed(){
	if (key == ' '){
		bird.up()
	}
}