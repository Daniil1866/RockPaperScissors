// variables that will store the players score

let humanScore = 0, computerScore = 0;

// paragraph where the game text will be displayed

let logOutput;

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

// function to prompt user's choice, (if he chose an unexisting option, or is cancelling the choice automatically end the game)

function getHumanChoice() {
  let choice = prompt("Make your turn");
  if (choice == null) return "";
  return choice.toLocaleLowerCase();
}

// function designed to play a single round

function playRound(humanChoice, computerChoice) {
  // handle null input
  if (humanChoice == null) {
    logOutput.innerHTML += "You canceled the game" + '<br>';
    return false; // return false to stop the execution
  }
  // handle invalid input
  if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
    logOutput.innerHTML += "You chose an unexisting object, game over!" + '<br>';
    return false; // return false to stop the execution
  }

  logOutput.innerHTML += '<br>' + "Computer's turn: " + computerChoice + '<br>';
  logOutput.innerHTML += "Your turn: " + humanChoice + '<br>';

  // handle all rock cases
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      logOutput.innerHTML += "You lose! paper beats rock" + '<br>';
    }
    else if (computerChoice === "scissors") {
      humanScore++;
      logOutput.innerHTML += "You win! rock beats scissors" + '<br>';
    }
    else
      logOutput.innerHTML += "It's a tie!" + '<br>';
  }
  // handle all paper cases
  else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      logOutput.innerHTML += "You lose! scissors beats paper" + '<br>';
    }
    else if (computerChoice === "rock") {
      humanScore++;
      logOutput.innerHTML += "You win! paper beats rock" + '<br>';
    }
    else
      logOutput.innerHTML += "It's a tie!" + '<br>';
  }
  // handle all scissors cases
  else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      logOutput.innerHTML += "You lose! rock beats scissors" + '<br>';
    }
    else if (computerChoice === "paper") {
      humanScore++;
      logOutput.innerHTML += "You win! scissors beats paper" + '<br>';
    }
    else
      logOutput.innerHTML += "It's a tie!" + '<br>';
  }
  return true; // in case if everything goes fine, just return true
}

// function to play a 5 round game
function playGame() {
  logOutput.innerHTML = "";
  humanScore = computerScore = 0;
  for (let i = 0; i < 5; i++) {
    if (!playRound(getHumanChoice(), getComputerChoice())) break;
  }
  // display the final score, and the winner
  logOutput.innerHTML += '<br>' + "Final score: " + '<br>';
  logOutput.innerHTML += "Player: " + humanScore + '<br>';
  logOutput.innerHTML += "Computer: " + computerScore + '<br>';
  logOutput.innerHTML += (humanScore > computerScore) ? "Player wins!" : "Computer wins!"
}

// HTML tags are located inside the DOM tree, so an event listener is required to be sure that they are available for further work
document.addEventListener('DOMContentLoaded', () => {
  // Add a button for starting the game
  const button = document.querySelector('button');
  button.addEventListener('click', playGame);

  // Add a paragraph where the game text appears
  logOutput = document.getElementById('output'); // Select the paragraph
  logOutput.innerHTML = "Welcome to the Rock Paper Scissors game!" + '<br>' + '<br>';
});