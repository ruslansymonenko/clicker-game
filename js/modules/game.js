export function game () {
    const footerContainers = document.querySelectorAll('.footer_container');
    const timeContainer = document.querySelector('.time');
    const gameArea = document.querySelector('.game_area');

    let gameStatus = false;

    function showTimer () {
        footerContainers.forEach(el => {
            if (el.getAttribute('data-footer') === 'timer') {
                el.classList.add('footer_container_active');
            } else {
                el.classList.remove('footer_container_active');
            }
        })
    };

    function hideTimer () {
        footerContainers.forEach(el => {
            if (el.getAttribute('data-footer') === 'menu') {
                el.classList.add('footer_container_active');
            } else {
                el.classList.remove('footer_container_active');
            }
        })
    };

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    function renderElements (area) {
        let gameSize = area.getBoundingClientRect();
        let elementSize = getRandom(30, 100);
        let element = document.createElement('div');
        let maxTop = gameSize.height - elementSize;
        let maxLeft = gameSize.width - elementSize;

        element.style.height = '80px';
        element.style.width = '80px';
        element.style.backgroundColor = 'black';


        console.log(gameSize);
        // gameArea.append(element);
    }

    function startGame (statusOfTheGame) {
        if (statusOfTheGame === true) {
            console.log('game is going...');
        }
    };

    function endGame (statusOfTheGame) {
        if (statusOfTheGame === false) {
            console.log('game is stop');
        }
    };

    showTimer();

    let timer = setInterval(() => {
        let time = parseFloat(timeContainer.textContent);
        
        if (time < 0) {
            clearInterval(timer);
            hideTimer();
            gameStatus = false;
            endGame(gameStatus);
        } else {
            timeContainer.textContent = (time - 0.1).toFixed(1);
            gameStatus = true;
            startGame(gameStatus);
            renderElements(gameArea);
        }
    }, 100);
};