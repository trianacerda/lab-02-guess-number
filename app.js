import { compareNumbers } from "./utils.js";

// import functions and grab DOM elements
const btn = document.getElementById('btn');

// initialize state
const targetNumber = Math.floor(Math.random() * 20) + 1;
const userGuess = document.getElementById('input');
const message = document.getElementById('message'); 
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
    }
    console.log(guessesRemaining);
    


});




//alert('')

//Math.floor(Math.random()*100);
