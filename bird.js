function Bird(){
    this.x = 100
    this.y = windowHeight/2

    this.gravity = 0.35;
    this.velocity = 0;
    this.lift = 5
    this.score = 0;
    

    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 26, 26)
    }

    this.up = function(){
        this.velocity -= this.lift
    }

    this.update = function(){
        this.velocity += this.gravity

        this.y += this.velocity

        if(this.y > windowHeight){
            this.y = windowHeight
            this.velocity = 0
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity = 0
        }
    }
}