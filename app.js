import { compareNumbers } from "./utils.js";

// import functions and grab DOM elements
const btn = document.getElementById('btn');

// initialize state
const targetNumber = Math.floor(Math.random() * 20) + 1;
const userGuess = document.getElementById('input');
const message = document.getElementById('message'); 
const resetBtn = document.getElementById('reset-btn');

let guessesRemaining = 4;

console.log(targetNumber);
// set event listeners 
btn.addEventListener('click', ()=>{  
    const userGuessNum = Number(userGuess.value);
    guessesRemaining--;
    compareNumbers(btn, message, targetNumber, userGuessNum);
    if (guessesRemaining === 0 && userGuessNum !== targetNumber) {
        message.textContent = 'You are all out of guesses! Game Over!';
        btn.disabled = true;
        resetBtn.style.visibility = 'visible';
    } 
    console.log(guessesRemaining);
    


});

resetBtn.addEventListener('click', ()=>{
    btn.disabled = false;
    resetBtn.style.visibility = 'hidden';
    guessesRemaining = 4;
    targetNumber = Math.floor(Math.random() * 20) + 1;
});




//alert('')

//Math.floor(Math.random()*100);
