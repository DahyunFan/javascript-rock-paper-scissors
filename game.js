let humanScore = 0;
let computerScore = 0;

function updateScores() {
    document.getElementById("humanScore").textContent = "Human: " + humanScore;
    document.getElementById("computerScore").textContent = "Computer: " + computerScore;
}

function incrementHuman() {
    humanScore++;
    updateScores();
}

function incrementComputer() {
    computerScore++;
    updateScores();
}

function getComputerChoice() {
    const num = Math.random();
    if(num >= 0 && num < 0.33) {
        return "rock";
    }
    else if(num >= 0.33 && num < 0.66) {
        return "paper";
    }
    else if(num >= 0.66 && num < 1) {
        return "scissors";
    }
    return undefined;
}

function getHumanChoice() {
    const choice = prompt("Choose: scissors, paper, or rock").toLowerCase();
    if(choice === "rock") {
        return "rock";
    }
    else if(choice === "paper") {
        return "paper";
    }
    else if(choice === "scissors") {
        return "scissors";
    }
    return undefined;

}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alertWinner("It's a tie! No one");
    }

    // Human wins
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        alertWinner("Human");
        incrementHuman();
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        alertWinner("Human");
        incrementHuman();
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        alertWinner("Human");
        incrementHuman();
    }

    // Computer wins
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        alertWinner("Computer");
        incrementComputer();
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        alertWinner("Computer");
        incrementComputer();
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        alertWinner("Computer");
        incrementComputer();
    }

    console.log("round human: " + humanScore);
    console.log("round computer: " + computerScore);
}

function alertWinner(winner) {
    alert(`${winner} has won!`);
}

function playGame() {

    for(let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("final human score: " + humanScore);
    console.log("final computer score: " + computerScore);

    if(humanScore === computerScore) {
        alert(`Game Over:
            Its a tie!`);
    }
    else if(humanScore > computerScore) {
        alert(`Game Over:
            Human has won!`);
    }
    else {
        alert(`Game Over:
            Computer has won!`);
    }
}

function replayGame() {
    humanScore = 0;
    computerScore = 0;
    playGame();
}
