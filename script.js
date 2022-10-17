let humanScore = 0;
let computerScore = 0;
let tieGames = 0; 

function computerPlay () {
    const library = ["rock", "paper", "scissors"]
    return library[Math.floor(Math.random() * library.length)];
}


function playRound(computerSelection, playerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
        ) {
        humanScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if (
        playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "scissors"  
        ) {
        tieGames++
        return `Its a tie! ${playerSelection} = ${computerSelection}`
    }
    else {
        computerScore++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    const playerInput = prompt("Choose: Rock, Paper, Scissors").toLowerCase();
    if (playerInput != "") {
        return playRound(computerPlay(), playerInput);
    }
    else {
        alert("You need to choose one next time!")
    }
}

for (let i = 0; i < 5; i++) {
    console.log(game()) 
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