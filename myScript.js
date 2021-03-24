function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
   let randomPick = choice[Math.floor(Math.random() * choice.length)];
   return(randomPick);
}

function playRound() {
    let playerSelection = prompt("Pick rock, paper, or scissors").toLowerCase();
    let computerSelection = computerPlay();
    
    console.log (`You: ${playerSelection} computer: ${computerSelection}`)
 
if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
       console.log(`You win, ${playerSelection} beats ${computerSelection}`);
   } else if (playerSelection === computerSelection) {
       console.log("TIE")
   } else {
    console.log("You lose");
}
}

function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
}

game();