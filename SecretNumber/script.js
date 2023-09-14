'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const secretNumberElement = document.querySelector('.secretNumber');
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){ //if the entered guess is not correct i.e. not a number or empty
        displayMessage('⛔ No Number!');

    }
    else if(guess == secretNumber){
       displayMessage('🎉 Correct Number!');
       document.querySelector('.secretText').textContent = "";
       document.querySelector('.secretNumber').textContent = secretNumber;
       if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    else if(guess != secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
             score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            secretNumberElement.textContent = secretNumber;
          }
    }

    

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

});