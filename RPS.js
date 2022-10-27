//create function getComputerChoice
//create variable randomNumber, so that the computer can randomly select "rock, paper, or scissors"
/*use Math.floor to round number down and Math.random to generate a random number between (0 and 1)
and then we'll multiply by 3 to get a random number between (0 and 3), which he'll use as values for
the computers choice of "rock, paper, or scissors"*/
//use if and else if conditional statements to step up the computer's choice scenerio
//this function and conditional will allow us to enable the computer to randomly select their choice of play
let choices = ["Rock", "Paper", "Scissors"];
choices[0];
choices[1];
choices[2];

function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
  }
//refactored with an array inside of if/ else if statements

//create function playRound with parameters (playerSelection and computeSelection)
//use if else if and else conditionals to play out all the possible scenerios for one round of game
/*use && operator to combine playerSelection choice with coinciding computerSelection
with the || operator to continue our string of logic*/
//use string interpolation in our console.log to articulate who will win one round of game
//create a prompt method with a variable userChoice for the user to enter their personal choice of "rock, paper, or scissors"
//create a variable computerChoice and assign its value as the function getComputerChoice
//console.log our variables userChoice and computerChoice
//call our function playRound using our variables userChoice and computerChoice

let userScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
	if (((playerSelection == 'Rock') && (computerSelection == 'Scissors'))  ||
	   ((playerSelection == 'Paper') && (computerSelection == 'Rock'))      ||
	   ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    userScore++;
	} else if (playerSelection == computerSelection) {
		console.log("Tie!");
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
	}
}


//create a function (game)-after loop works put in function and call it
//use a for loop to play 5 rounds-start with for loop that counts from 0 to 5
//count winner of each round
//show who won each round
//score user: 1, computer:0
//count is only new variable, which is score
//how do I make game selection different every round-different result?
//how do I get score variable to increment by 1? (score++)

/*function game() {
  for (let round = 0; round < 5; round ++) {
    console.log(round);
    playRound(userChoice, computerChoice);
  }
}
game();*/

/*function game(playRound) {
  for (let round = 0; round < 5; round++) {
  console.log(round);
  let score = playRound(userChoice, computerChoice);
  }
}
game(playRound);*/  

function game() {
  for (let round = 0; round < 5; round ++) {
    console.log(round);
    let userChoice = (prompt ("Enter Rock, Paper, or Scissors"));
    console.log("user", userChoice);
    let computerChoice = getComputerChoice();
    console.log("computer", computerChoice);
    playRound(userChoice, computerChoice);
  }
    console.log("userScore", userScore);
    console.log("computerScore", computerScore);
    if (userScore > computerScore) {
      return "You Win!";
    } else if (userScore < computerScore) {
      return "You Lose!";
    } else {
      return "You Tie!";
    }
}
console.log(game());
