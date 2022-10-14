export function choosePlayer () {
    const changePlayerBtn = document.querySelector('.choose_player_btn');
    let currentPlayer;

    const players = [
        {
            playerName: 'player1',
            playerMaxResult: 0
        }
    ];

    function checkPlayer (playersArr) {
        let name;

        if (confirm('Are you first time playing?')) {
            name = prompt('Please, write your name', []);
            let newPlayer = {
                playerName: name,
                playerMaxResult: 0
            }
            console.log(newPlayer);
            playersArr.push(newPlayer);
        } else {
            name = prompt('Please, write your name', []);
        }
    }


    changePlayerBtn.addEventListener('click', () => {
        checkPlayer(players);
        console.log(players);
    })
}