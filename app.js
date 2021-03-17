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

console.log(computerPlay)

