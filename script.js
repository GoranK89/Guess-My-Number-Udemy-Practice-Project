'use strict';
/*
// selecting the class (.message)
// with .textContent we can acess the text of the <p>
console.log(document.querySelector('.message').textContent);

//changing the text of ".message"
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// changing the value of the input
document.querySelector('.guess').value = 23;
// acessing the input(.guess), inputs content is VALUE, NOT text
console.log(document.querySelector('.guess').value);
*/
//////////////////////////////////////////////////////////////////////////
//EVENT LISTENER

// the random number has to be outside the event handler, we need it only at the begining of the application. If it was inside we would generate a new one on each click!
// random number: Math.random generates a number between 0 and 1. To get it to 20 we multiply. To cut off decimals we use Math.trunc. Finally add 1 to get it to 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// selecting the number, changing the .number

// its good to have a variable that holds data in the CODE, so it has acess to it all the time, not relying on the DOM
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// selecting the button and using the METHOD ".addEventListener()", the event will be CLICK
// to the event listener we also pass a function directly to the listener
// JS automatically calls the function when the EVENT HAPPENS
// save the input number to a variable
// remember, through inputs we get STRINGS!
// wrap the querySelector in the type conversion NUMBER
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // IF guess is NOT a number, display the message, IF too high....
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number! ⛔';
    displayMessage('No number! ⛔');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// CODING CHALLENGE #!
// game reset functionality - bringing back the previus values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
