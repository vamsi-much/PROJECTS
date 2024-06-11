let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();


/*

if(!score) {
score={
  wins:0,
  losses:0,
  ties:0
};
}  */





function pickComputerMove() {
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'Paper';
} else {
  computerMove = 'Scissors';
}

return computerMove;
}

function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';
if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
    result = 'Tie.';
  } else if (computerMove === 'Paper') {
    result = 'You Lose.';
  } else if (computerMove === 'Scissors') {
    result = 'You Win.';
  }
} else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
    result = 'You Win.';
  } else if (computerMove === 'Paper') {
    result = 'Tie.';
  } else if (computerMove === 'Scissors') {
    result = 'You Lose.';
  }
} else if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You Lose.';
  } else if (computerMove === 'Paper') {
    result = 'You Win.';
  } else if (computerMove === 'Scissors') {
    result = 'Tie.';
  }
}

if (result === 'You Win.') {
  score.wins += 1;
} else if (result === 'You Lose.') {
  score.losses += 1;
} else if (result === 'Tie.') {
  score.ties += 1;
}
localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-move').innerHTML = `You <img class="move-icon" src="images/${playerMove.toLowerCase()}-emoji.png" alt="${playerMove}"> 
<img class="move-icon" src="images/${computerMove.toLowerCase()}-emoji.png" alt="${computerMove}"> Computer`;
}
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}



