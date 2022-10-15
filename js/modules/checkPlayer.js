export function checkPlayer () {
    let player = document.querySelector('#currentPlayer');
    
    if (player.textContent === 'No player') {
        return false;
    } else {
        return true;
    }
}