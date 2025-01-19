// variables that will store the players score

let humanScore = 0, computerScore = 0;

// function which randomly returns rock, paper, or scissors

function getComputerChoice() {
  // generate a random number from 1 to 10
  let choice = Math.floor(Math.random() * 10) + 1;

  // if it's less than 4, it's rock
  if (choice < 4) return "rock";

  // if it's less than 7, it's paper
  else if (choice < 7) return "paper";

  // in any other case, it's scissors
  else return "scissors";
}

// function to prompt user's choice, (if he chose an unexisting option, automatically end the game)

function getHumanChoice() {
  let choice = prompt("Make your turn");
  return choice.toLocaleLowerCase();
}

// function designed to play a single round

function playRound(humanChoice, computerChoice) {
  // handle invalid input
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    console.log("You chose an unexisting object, game over!")
    return;
  }

  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      console.log("You lose! paper beats rock");
    }
    else if (computerChoice === "scissors") {
      humanScore++;
      console.log("You win! rock beats scissors")
    }
    else console.log("It's a tie!");
  }
  else if (humanChoice === "paper") {

  }
}

playRound(getHumanChoice(), getComputerChoice());