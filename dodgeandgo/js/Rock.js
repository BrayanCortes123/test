let obstacle1 = document.getElementById("obstacle1");
let obstacle2 = document.getElementById("obstacle2");

function moveObstacle1() {
    let left = parseInt(window.getComputedStyle(obstacle1).getPropertyValue("left"));
    if (left <= 0) {
        obstacle1.style.left = "100vw";
    } else {
        obstacle1.style.left = left - 2 + "px";
    }
}

function moveObstacle2() {
    let left = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"));
    if (left <= 5) {
        obstacle2.style.left = "100vw";
    } else {
        obstacle2.style.left = left - 2 + "px";
    }
}

function checkCollision(obstacle, bicy) {
    let bicyRect = bicy.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (bicyRect.x < obstacleRect.x + obstacleRect.width &&
        bicyRect.x + bicyRect.width > obstacleRect.x &&
        bicyRect.y < obstacleRect.y + obstacleRect.height &&
        bicyRect.y + bicyRect.height > obstacleRect.y) {
      /*   alert("Game Over"); */
    }
}

setInterval(function() {
    moveObstacle1();
    checkCollision(obstacle1, mainbicy);
    checkCollision(obstacle1, mainbicyTwo);
}, 20);

setTimeout(function() {
    setInterval(function() {
        moveObstacle2();
        checkCollision(obstacle2, mainbicy);
        checkCollision(obstacle2, mainbicyTwo);
    }, 20);
}, 8000);
