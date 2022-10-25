
function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3))
	console.log("randomNumber", randomNumber);
  if (randomNumber === 0){
    return "Rock";
  }
  else if (randomNumber === 1){
    return "Paper";
  }
  else if (randomNumber === 2){
  return "Scissors";
  }
  }

function playRound(playerSelection, computerSelection, score) {
	if (((playerSelection == 'Rock') && (computerSelection == 'Scissors'))  ||
	   ((playerSelection == 'Paper') && (computerSelection == 'Rock'))      ||
	   ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
		score[0]++;
	} else if (playerSelection == computerSelection) {
		console.log("Tie!");
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
		score[1]++;

	}
	return score;
}

let userChoice = (prompt ("Enter Rock, Paper, or Scissors"));
let computerChoice = getComputerChoice();
console.log("user", userChoice);
console.log("computer", computerChoice);
