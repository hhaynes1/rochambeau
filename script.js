// Rock paper scissors, odin project
function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose. Scissors beats paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose. Rock beats scissors.';
    }
    return 'You win.';
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt('Rock, paper or scissors: ', '');
        let result = playGame(playerSelection, getComputerChoice());
        if (result === 'You win.') {
            playerScore += 1;
        } else if (result.includes('You lose.')) {
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
        console.log('Your total: ' + String(playerScore) + '. You lost!')
    } else {
        console.log('Something is wrong with the scores.')
    }
}