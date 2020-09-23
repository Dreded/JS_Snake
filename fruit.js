function Fruit() {
    this.x;
    this.y;
    this.img = new Image();
    this.img.src = "apple.png"; //transparent png

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * columns - 1) +1) * scale;
        this.y = (Math.floor(Math.random() * rows - 1) +1) * scale;
    }
    
    this.draw = function() {
        ctx.fillStyle = '#de2d87';
        ctx.drawImage(this.img, this.x, this.y, scale, scale);
        //ctx.fillRect(this.x, this.y, scale, scale);
    }
}