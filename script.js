
function computerPlay() {
    const playNumber = Math.floor(Math.random() * 3);

    switch (playNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const r = "rock";
    const p = "paper";
    const s = "scissors";

    const winMessage = "You win";
    const loseMessage = "You lose";
    const tieMessage = "It's a tie";

    if (playerSelection === computerSelection) {
        return (tieMessage);
    } else if ((playerSelection === r && computerSelection === s) ||
        (playerSelection === p && computerSelection === r) || (playerSelection === s && computerSelection === p)) {
        return (winMessage);
    } else {
        return (loseMessage);
    }
}

const playerSelection = "paper";
const computerSelection = computerPlay();


console.log("Computer used " + computerPlay());
console.log(playRound(playerSelection, computerSelection));