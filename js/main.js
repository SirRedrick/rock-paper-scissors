const choices = ['Rock', 'Paper', 'Scissors'];
const outcomes = ['Tie', 'You Win', 'You Lose'];

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection, callback) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  const playerChoice = choices.indexOf(playerSelection);
  const computerChoice = choices.indexOf(computerSelection);

  const choiceDifference = playerChoice - computerChoice + 3;

  const beats =
    choiceDifference % 3 == 0
      ? ''
      : choiceDifference % 3 == 1
      ? `${playerSelection} beats ${computerSelection}`
      : `${computerSelection} beats ${playerSelection}`;

  callback(choiceDifference % 3);

  return `${outcomes[choiceDifference % 3]}! ${beats}`;
}

function game() {
  score = {
    player: 0,
    computer: 0,
  };

  for (let i = 0; i < 5; i++) {
    const choice = prompt('Choose Rock, Paper or Scissor');
    const result = playRound(choice, computerPlay(), (choiceDifference) => {
      if (choiceDifference == 1) score.player++;
      else if (choiceDifference == 2) score.computer++;
    });
    console.log(`${result}. Score:
    - You ${score.player}
    - Computer ${score.computer}`);
  }

  const scoreDifference = score.player - score.computer;
  const result =
    scoreDifference == 0
      ? 'Tie!'
      : scoreDifference > 0
      ? 'You Won!'
      : 'You Lost!';

  console.log(result);
}

game();
