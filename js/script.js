import {checkPlayer} from './modules/checkPlayer.js';
import {game} from './modules/game.js';
import {choosePlayer} from './modules/choosePlayer.js';

window.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.play_btn');
    const changePlayerBtn = document.querySelector('.choose_player_btn');


    changePlayerBtn.addEventListener('click', () => {
        choosePlayer();
    })

    startBtn.addEventListener('click', () => {
        let playerExist = checkPlayer();
        console.log(playerExist);
        if (playerExist === true) {
            game();
        } else {
            choosePlayer();
        }
    })    
})