function computerPlay() {
    const randomChoices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return randomChoices[randomIndex];
}

function playSingleRound(playerSelection, computerSelection) {
    let isWinnerOfThisRound;

    if (playerSelection !== computerSelection) {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                isWinnerOfThisRound = false;
            } else {
                isWinnerOfThisRound = true;
            }
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                isWinnerOfThisRound = true;
            } else {
                isWinnerOfThisRound = false;
            }
        } else {
            if (playerSelection === "Scissors") {
                if (computerSelection === "Rock") {
                    isWinnerOfThisRound = false;
                } else {
                    isWinnerOfThisRound = true;
                }
            }
        }
    }
    return isWinnerOfThisRound;
}

function game() {
    
    let computerScore = 0;
    let playerScore = 0;
    
    for(let i = 0; i < 5; ++i) {
        const playerInput = window.prompt("Rock, Paper, or Scissors?");
        const playerChoice = toNormalCase(playerInput);
        const computerChoice = computerPlay();
        const isWinnerOfThisRound = playSingleRound(playerChoice, computerChoice);
        if ( isWinnerOfThisRound ) {
            ++playerScore;
        }
        else if ( isWinnerOfThisRound === false ) {
            ++computerScore;
        }
        const displayMessage = displayResult(isWinnerOfThisRound, playerChoice, computerChoice);
        console.log(displayMessage);
    }

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) { 
        console.log("You lost the game!");
    } else {
        console.log("You tied the game!");
    }
}

function toNormalCase(sampleString) {
    return (
        sampleString.charAt(0).toUpperCase() +
        sampleString.slice(1).toLowerCase()
    );
}

function displayResult(isWinner, playerChoice, computerChoice) {
    let displayMessage;
    
    if(isWinner === undefined) {
        displayMessage = "No winner this round!!!";
    } else {
        displayMessage = isWinner
        ? `You Won! ${playerChoice} beats ${computerChoice}`
        : `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    return displayMessage;
}

game();
