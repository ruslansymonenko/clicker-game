export function gameTimer () {
    const footerContainers = document.querySelectorAll('.footer_container');

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
}