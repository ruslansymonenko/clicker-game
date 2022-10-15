export function gameTimer () {
    const footerContainers = document.querySelectorAll('.footer_container');
    const timeContainer = document.querySelector('.time');

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

    showTimer();
    let timer = setInterval(() => {
        let time = parseFloat(timeContainer.textContent);
        
        if (time < 0) {
            clearInterval(timer);
            hideTimer();
        } else {
            timeContainer.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);
}