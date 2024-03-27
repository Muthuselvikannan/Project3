const playerNumSpan = document.getElementById('player-num');
const playerOneScoreSpan = document.getElementById('player1score');
const playerTwoScoreSpan = document.getElementById('player2score');
const playerOneButton = document.getElementById('player1button');
const playerTwoButton = document.getElementById('player2button');
const restButton = document.getElementById('reset');
const diceImg = document.getElementById('image');
const data = {
    currentPlayer: 1,
    playerOneScore: 0,
    playerTwoScore: 0,
}
const setCurrentPlayer = (playerNum) => {
    data.currentPlayer = playerNum;
    playerNumSpan.innerHTML = data.currentPlayer;

    if (data.currentPlayer === 1) {
        playerOneButton.classList.remove('disabled');
        playerTwoButton.classList.add('disabled');
        playerOneButton.removeAttribute('disabled');
        playerTwoButton.setAttribute('disabled', 'disabled');
    } else {
        playerOneButton.classList.add('disabled');
        playerTwoButton.classList.remove('disabled');
        playerOneButton.setAttribute('disabled', 'disabled');
        playerTwoButton.removeAttribute('disabled');
    }
    
}

const startGame = () => {
    setCurrentPlayer(Math.ceil(Math.random() * 2));
    data.playerOneScore = 0;
    data.playerTwoScore = 0;
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = '';
    playerOneScoreSpan.innerHTML = data.playerOneScore;
    playerTwoScoreSpan.innerHTML = data.playerTwoScore;
}



const rollTheDice = () => {
    const randomNum = Math.ceil(Math.random() * 6);
    diceImg.src = `img/dice${randomNum}.png`;
    if (data.currentPlayer === 1) {
        data.playerOneScore += randomNum;
        playerOneScoreSpan.innerHTML = data.playerOneScore;
    }
    if (data.currentPlayer === 2) {
        data.playerTwoScore += randomNum;
        playerTwoScoreSpan.innerHTML = data.playerTwoScore;
    }
}

playerOneButton.addEventListener('click', () => {
    rollTheDice();
    if(data.playerOneScore >= 30) {
        const contentDiv = document.getElementById('content');
        const textNode = document.createTextNode('Player 1 Won the Game click the Rest button to start a new game');
        contentDiv.appendChild(textNode);
        playerOneButton.classList.add('disabled');
        playerOneButton.setAttribute('disabled', 'disabled');
        restButton.classList.remove('disabled');
        restButton.removeAttribute('disabled');
    }
    else{

        setCurrentPlayer(2);
    }
})
playerTwoButton.addEventListener('click', () => {
    rollTheDice();
    if(data.playerTwoScore >= 30) {
        const contentDiv = document.getElementById('content');
        const textNode = document.createTextNode('Player 2 Won the Game click the Reset button to start a new game');
        contentDiv.appendChild(textNode);
        playerTwoButton.classList.add('disabled');
        playerTwoButton.setAttribute('disabled', 'disabled');
        restButton.classList.remove('disabled');
        restButton.removeAttribute('disabled');
    }
    else{

        setCurrentPlayer(1);
    }
})


restButton.addEventListener('click', () => {
    startGame();
    restButton.classList.add('disabled');
    restButton.setAttribute('disabled', 'disabled');
})

window.onload = () => {
    startGame()
}