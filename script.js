let humanScore = 0;
let computerScore = 0;
let tieGames = 0; 
const library = ["rock", "paper", "scissors"]

function computerPlay () {
    return library[Math.floor(Math.random() * library.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        tieGames++
        return `Its a tie! ${playerSelection} = ${computerSelection}`
    }
    else if (
        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
    ) {
        humanScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }
  
}

function game() {
    const playerInput = prompt("Choose: Rock, Paper, Scissors").toLowerCase();
    if (library.includes(playerInput)) { 
        return console.log(playRound(playerInput, computerPlay()));
    }
    else {
        game();
    }
}

for (let i = 0; i < 5; i++) {
    game()
    if (i >= 4) {   
        const winner = humanScore > computerScore ? "Human" : "Computer";
        console.log(`
        Human: ${humanScore}
        Computer: ${computerScore}
        Ties: ${tieGames}
        Winner: ${humanScore === computerScore ? "None" : winner}
        `)
    }
}