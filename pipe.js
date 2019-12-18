function Pipe(){
    this.top = random(0, windowHeight/2)
    this.bottom = random(0, windowHeight/2)
    this.x = windowWidth
    this.width = 20
    this.speed = 5
    this.isHit = false;
    this.isPlused = false;
    
    this.hits = function(bird){
        if(bird.y < this.top || bird.y > windowHeight - this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.width){
                this.isHit = true;
                return true
            }
        }else if(bird.x > this.x && bird.x < this.x + this.width && !this.isPlused){
            this.isPlused = true;
            bird.score++
        }
    }

    this.show = function(){
        fill(255)
        if(this.isHit){
            fill(255, 0, 0)
        }
        rect(this.x, 0, this.width, this.top)
        rect(this.x, windowHeight - this.bottom, this.width, this.bottom)
    }

    this.update = function(){
        this.x -= this.speed
    }

    this.offscreen = function(){
        return this.x < -this.width
    }
}