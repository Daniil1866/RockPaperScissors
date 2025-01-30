const startButton = document.querySelector('#start-button');
startButton.addEventListener('click', playGame);

let logOutput; // paragraph where the game text will be displayed
logOutput = document.getElementById('output');
logOutput.innerHTML = "Welcome to the Rock Paper Scissors game!" + '<br>' + '<br>';

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 10) + 1;
  if (choice < 4) return "rock";
  else if (choice < 7) return "paper";
  else return "scissors";
}

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

function playGame() {
  let humanScore = 0, computerScore = 0;
  logOutput.innerHTML = "";

  const buttonContainer = document.querySelector("#button-container");
  startButton.classList.add("disabled");
  buttonContainer.classList.remove("disabled");
  buttonContainer.addEventListener('click', (e) => {
    switch (e.target.id) {
      case "rock-button":
        console.log("rock");
        break;
      case "paper-button":
        console.log("paper");
        break;
      case "scissors-button":
        console.log("scissors");
        break;
    }
  });



  // while (humanScore <= 5 || computerScore <= 5) {
  //   if (!playRound(getHumanChoice(), getComputerChoice())) break;
  //   buttonContainer.forEach(button =>button.classList.remove("disabled"));
  //   displayFinalScore(humanScore, computerScore);
  // }
}

function displayFinalScore(humanScore, computerScore) {
  logOutput.innerHTML += '<br>' + "Final results: " + '<br>';
  logOutput.innerHTML += "Player: " + humanScore + '<br>';
  logOutput.innerHTML += "Computer: " + computerScore + '<br>';
  logOutput.innerHTML += (humanScore === computerScore) ? "Nobody won" : (humanScore > computerScore) ? "Player wins!" : "Computer wins!"
}