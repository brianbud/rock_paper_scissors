// below is the computerAi selections

let computerPlay = Math.random();
if (computerPlay < 0.34) {
    computerPlay = "rock";
} else if (computerPlay <= 0.66 && computerPlay > .33) {
    computerPlay = "paper";
}
else {
    computerPlay = "scissors";
}


// console.log(computerPlay);



const playerSelection = "scissors";
const computerSelection = computerPlay;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "scissors") {
        return ("You used Rock , you win");
    }

    if (playerSelection === "Paper" && computerSelection === "rock") {
        return ("You used paper and computer used rock, you win!")
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You used scissors and computer used paper, you win!")
    }

    if (computerSelection === "rock" && playerSelection === "scissors") {
        return ("You Lose! Rock beats Scissors");
    }

    if (computerSelection === "paper" && playerSelection === "rock") {
        return ("You Lose! Paper beats Rock!")
    }

    if (computerSelection === "scissors" && playerSelection === "paper") {
        return ("You Lose! Scissors beats Paper")
    }

    else {
        return ("You lose!");
    }
}


console.log(playRound(playerSelection, computerSelection));