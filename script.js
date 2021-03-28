
//game logic
function computerPlay() {

    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {

        return "paper";
    }

    else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    let playerPoint = 0

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {

        playerPoint = 1
        console.log("You chose " + playerSelection + "." + "Computer chose " + computerSelection + ". YOU WIN")
    }

    else if ((playerSelection === "rock" && computerSelection === "paper") || r
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("You chose " + playerSelection + ". Computer chose " + computerSelection + " You lose");

    } else if (playerSelection == computerSelection) {
        console.log("You chose " + playerSelection + ". Computer chose " + computerSelection + ". It's a tie")

    } else {
        console.log("Invalid Entry, try again")
    }

    return playerPoint
}


function game(roundsTotal = 5) {
    let roundsPlayed = 0
    let playerScore = 0

    while (roundsPlayed < roundsTotal) {
        let playerSelection = prompt("enter your choice").toLowerCase();

        if ((playerSelection != "rock") &&
            (playerSelection != "paper") &&
            (playerSelection != "scissors")) { continue }

        let computerSelection = computerPlay()
        if (playerSelection == computerSelection) {
            console.log("its a tie you both chose the " + playerSelection)
            continue
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++

    }

    if (playerScore > (roundsPlayed / 2)) {
        console.log(" you won " + playerScore + " out of " + roundsPlayed + "rounds. You WIN!")
    }

    else if (playerScore == (roundsPlayed / 2)) {
        console.log(" you won " + playerScore + " out of " + roundsPlayed + "rounds. TIED!")
    }
    else {
        console.log('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
}

// to run the game

game();



