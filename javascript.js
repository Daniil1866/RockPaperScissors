let humanScore = 0, computerScore = 0;
const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', playGame);

const buttonContainer = document.querySelector("#button-container");
buttonContainer.addEventListener('click', (e) => {
  switch (e.target.id) {
    case "rock-button":
      logOutput.innerHTML = "";
      playRound("rock", getComputerChoice());
      break;
    case "paper-button":
      logOutput.innerHTML = "";
      playRound("paper", getComputerChoice());
      break;
    case "scissors-button":
      logOutput.innerHTML = "";
      playRound("scissors", getComputerChoice());
      break;
  }
});

let logOutput;
logOutput = document.getElementById('output');
logOutput.innerHTML = "Welcome to the Rock Paper Scissors game!" + '<br>' + '<br>';

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 10) + 1;
  if (choice < 4) return "rock";
  else if (choice < 7) return "paper";
  else return "scissors";
}

function playRound(humanChoice, computerChoice) {
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
  if (humanScore >= 5 || computerScore >= 5) {
    startButton.classList.remove("disabled");
    buttonContainer.classList.add("disabled");
    displayFinalScore(humanScore, computerScore);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  logOutput.innerHTML = "";

  startButton.classList.add("disabled");
  buttonContainer.classList.remove("disabled");
}

function displayFinalScore(humanScore, computerScore) {
  logOutput.innerHTML += '<br>' + "Final results: " + '<br>';
  logOutput.innerHTML += "Player: " + humanScore + '<br>';
  logOutput.innerHTML += "Computer: " + computerScore + '<br>';
  logOutput.innerHTML += (humanScore === computerScore) ? "Nobody won" : (humanScore > computerScore) ? "Player wins!" : "Computer wins!"
}