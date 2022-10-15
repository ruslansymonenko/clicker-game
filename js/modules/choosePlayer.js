export function choosePlayer () {
    const playerNamePlaceHolder = document.querySelector('#currentPlayer');
    let currentPlayer;

    const players = [
        {
            playerName: 'player1',
            playerMaxResult: 0
        }
    ];

    function checkName (playerName) {
        if (playerName === 'No player') {
            return false;
        } else {
            return true;
        }
    }

    function checkPlayer (playersArr) {
        let name;

        if (confirm('Are you first time playing?')) {
            name = prompt('Please, write your name', []);

            if (checkName(name) === true) {
                let newPlayer = {
                    playerName: name,
                    playerMaxResult: 0
                }
                console.log(newPlayer);
                playerNamePlaceHolder.textContent = newPlayer.playerName;
                playersArr.push(newPlayer);
            } else {
                alert ('This name not suitable')
            }
        } else {
            name = prompt('Please, write your name', []);
        }
    }


    checkPlayer (players);

}