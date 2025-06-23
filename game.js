let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = '';
let hDisplayScore = document.querySelector('#human-score');
let cDisplayScore = document.querySelector('#computer-score');
let choiceMenu = document.querySelector('#player-choices');
choiceMenu.addEventListener('click', toggleChoices);

function toggleChoices(event) {
    let target = event.target;

    switch(target.id) {
        case 'rock' :
            console.log(target.id);
            humanChoice = 'rock';
            playRound();
            break;
        case 'paper' :
            console.log(target.id);
            humanChoice = 'paper';
            playRound();
            break;
        case 'scissors' :
            console.log(target.id);
            humanChoice = 'scissors'
            playRound();
            break;
    }
}

function updateScores() {
    hDisplayScore.textContent = "Human: " + humanScore;
    cDisplayScore.textContent = "Computer: " + computerScore;
}

function incrementHuman() {
    humanScore++;
    updateScores();
}

function incrementComputer() {
    computerScore++;
    updateScores();
}

function setComputerChoice() {
    const num = Math.random();
    if(num >= 0 && num < 0.33) {
        computerChoice = "rock";
        return;
    }
    else if(num >= 0.33 && num < 0.66) {
        computerChoice = "paper";
        return;
    }
    else if(num >= 0.66 && num < 1) {
        computerChoice = "scissors";
        return;
    }
    computerChoice = 'paper';
    
}

function playRound() {
    setComputerChoice();

    if (humanChoice === computerChoice) {
        alertWinner("It's a tie! No one");
    }

    // Human wins
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        incrementHuman();
        alertWinner("Human");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        incrementHuman();
        alertWinner("Human");
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        incrementHuman();
        alertWinner("Human");
    }

    // Computer wins
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        incrementComputer();
        alertWinner("Computer");
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        incrementComputer();
        alertWinner("Computer");
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        incrementComputer();
        alertWinner("Computer");
    }

    let winner = humanScore > computerScore ? 'human' : 'computer'
    if(humanScore === 5 || computerScore === 5) {
        alert(`Winner decided, ${winner} has won!`);
        choiceMenu.removeEventListener('click', toggleChoices);
    }

    console.log("round human: " + humanScore);
    console.log("round computer: " + computerScore);
}

function alertWinner(winner) {
    alert(`${winner} has won!`);
}

function replayGame() {
    humanScore = 0;
    computerScore = 0;
    updateScores();
    choiceMenu.addEventListener('click', toggleChoices);
}