// import functions and grab DOM elements
const btn = document.getElementById('btn');

// initialize state
const targetNumber = Math.floor(Math.random() * 20);
const userGuess = document.getElementById('input');
const message = document.getElementById('message'); 
let guessesRemaining = 3;

// set event listeners 
btn.addEventListener('click', ()=>{  
    if (guessesRemaining === 0) {
        message.textContent = 'You are all out of guesses! Game Over!';
    }
    const userGuessNum = Number(userGuess);
    guessesRemaining--;



});




//alert('')

//Math.floor(Math.random()*100);
