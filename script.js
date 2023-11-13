// Rock paper scissors, odin project
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset');
const roundResult = document.getElementById('result');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
let result;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Round lost. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Round lost. Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Round lost. Rock beats scissors.';
    }
    return 'Round won.';
}

function resetGame() {
    result = 'Game start!';
    playerScore = 0;
    computerScore = 0;
    updateScore(result);
}

function updateScore(result) {
    if (playerScore == 5 || computerScore == 5) {
        resetGame();
        return;
    } else if (result === 'Round won.') {
        playerScore += 1;
    } else if (result.includes('Round lost.')) {
        computerScore += 1;
    }

    roundResult.textContent = result;
    playerScoreText.textContent = 'Player score: ' + playerScore;
    computerScoreText.textContent = 'Computer score: ' + computerScore;

    if (playerScore == 5) {
        roundResult.textContent = "You won the game!";
    } else if (computerScore == 5) {
        roundResult.textContent = "You lost the game!";
    }
}

rockBtn.addEventListener('click', () => {
    updateScore(playRound('rock', getComputerChoice()));
});

paperBtn.addEventListener('click', () => {
    updateScore(playRound('paper', getComputerChoice()));
});

scissorsBtn.addEventListener('click', () => {
    updateScore(playRound('scissors', getComputerChoice()));
});

resetBtn.addEventListener('click', () => {
    resetGame();
})

/*
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, paper or scissors: ', '');
        let result = playRound(playerSelection, getComputerChoice());
        if (result === 'Round won.') {
            playerScore += 1;
        } else if (result.includes('Round lost.')) {
            computerScore += 1;
        }
        console.log('Round: ' + String(i) + ', ' + result);
        console.log('Player: ' + String(playerScore) + ', Computer: ' + String(computerScore))
    }

    if (playerScore > computerScore) {
        console.log('Computer total: ' + String(computerScore) + '.')
        console.log('Your total: ' + String(playerScore) + '. You won!')
    } else if (playerScore === computerScore) {
        console.log('Tie! Both players total: ' + String(playerScore) + '.')
    } else if (playerScore < computerScore) {
        console.log('Computer total: ' + String(computerScore) + '.')
        console.log('Your total: ' + String(playerScore) + '. Round lost!')
    } else {
        console.log('Something is wrong with the scores.')
    }
}
*/