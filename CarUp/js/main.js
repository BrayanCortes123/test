document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.car');
    const road = document.querySelector('.road');
    let moveBy = 10;
    let obstacleInterval;

    window.addEventListener('load', () => {
        if (circle) {
            circle.style.position = 'absolute';
            circle.style.left = 0;
            circle.style.top = 0;
        }
    });

    window.addEventListener('keydown', (e) => {
        if (circle) {
            switch (e.key) {
                case 'ArrowLeft':
                    circle.style.left = Math.max(0, parseInt(circle.style.left) - moveBy) + 'px';
                    break;
                case 'ArrowRight':
                    const maxWidth = window.innerWidth - circle.clientWidth;
                    circle.style.left = Math.min(maxWidth, parseInt(circle.style.left) + moveBy) + 'px';
                    break;
                case 'ArrowUp':
                    circle.style.top = Math.max(0, parseInt(circle.style.top) - moveBy) + 'px';
                    break;
                case 'ArrowDown':
                    const maxHeight = window.innerHeight - circle.clientHeight;
                    circle.style.top = Math.min(maxHeight, parseInt(circle.style.top) + moveBy) + 'px';
                    break;
            }
        }
    });

    function createObstacle() {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.width = '100px';
        obstacle.style.height = '200px';
        obstacle.style.background = 'red';

        const roadWidth = road.clientWidth;
        const obstaclePosition = Math.floor(Math.random() * roadWidth);
        obstacle.style.position = 'absolute';
        obstacle.style.left = obstaclePosition + 'px';
        obstacle.style.top = '-20px';

        road.appendChild(obstacle);

        const obstacleSpeed = 5;
        const obstacleAnimation = setInterval(() => {
            const obstacleTop = parseInt(obstacle.style.top);
            obstacle.style.top = obstacleTop + obstacleSpeed + 'px';

            if (obstacleTop > window.innerHeight) {
                road.removeChild(obstacle);
                clearInterval(obstacleAnimation);
            }
        }, 20);
    }

    obstacleInterval = setInterval(createObstacle, 2000);

    /* clearInterval(obstacleInterval); */
});
