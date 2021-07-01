export function compareNumbers(resetBtn, btn, results, targetNumber, userGuessNum){  
    if (targetNumber > userGuessNum) {
        results.textContent = 'You guessed too low';
    }
    else if (targetNumber < userGuessNum) {
        results.textContent = 'You guessed too high';
    }
    else {
        results.textContent = 'You WIN! Game Over!';
        btn.disabled = true;
        resetBtn.style.visibility = 'visible';
    }
}