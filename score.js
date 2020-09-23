function Score() {
    this.score = 0;

    this.addOne = function() {
        this.score++;
    }
    
    this.reset = function() {
        this.score = 0;
    }
    
    this.draw = function() {
        ctx.fillStyle = '#ffc107';
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + this.score, 10, 30);
    }
}