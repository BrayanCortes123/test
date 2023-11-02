let obstacle1 = document.getElementById("obstacle1");
let obstacle2 = document.getElementById("obstacle2");

function moveObstacle(obstacle) {
    let left = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (left <= 0) {
        obstacle.style.left = "100vw";
    } else {
        obstacle.style.left = left - 2 + "px";
    }
}

function checkCollision(obstacle) {
    let bicyRect = mainbicy.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (bicyRect.x < obstacleRect.x + obstacleRect.width &&
        bicyRect.x + bicyRect.width > obstacleRect.x &&
        bicyRect.y < obstacleRect.y + obstacleRect.height &&
        bicyRect.y + bicyRect.height > obstacleRect.y) {
        alert("Game Over");
    }
}

setInterval(function() {
    moveObstacle(obstacle1);
    moveObstacle(obstacle2);
    checkCollision(obstacle1);
    checkCollision(obstacle2);
}, 20);

function moveObstacle(obstacle) {
    let left = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if (left <= 0) {
        obstacle.style.left = "100vw";
    } else {
        obstacle.style.left = left - 2 + "px";
    }
}

// Bicicleta 2

function checkCollision(obstacle) {
    let bicyRect = mainbicyTwo.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (bicyRect.x < obstacleRect.x + obstacleRect.width &&
        bicyRect.x + bicyRect.width > obstacleRect.x &&
        bicyRect.y < obstacleRect.y + obstacleRect.height &&
        bicyRect.y + bicyRect.height > obstacleRect.y) {
        alert("Game Over");
    }
}

setInterval(function() {
    moveObstacle(obstacle1);
    moveObstacle(obstacle2);
    checkCollision(obstacle1);
    checkCollision(obstacle2);
}, 20);