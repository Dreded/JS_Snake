const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var speed = 250;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    score = new Score();
    fruit.pickLocation();
    updateSpeed = function() {
        window.clearInterval(interval);
        interval = window.setInterval(run, speed);
    }
    run = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();
        score.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
            score.addOne();
            if (speed > 50) {
                speed -= 5;
                updateSpeed();
            }
        }
        if (snake.checkCollision()) {
            score.reset();
            speed = 250;
            updateSpeed();
        }
    }

    var interval = window.setInterval(run, speed);
})();


window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))