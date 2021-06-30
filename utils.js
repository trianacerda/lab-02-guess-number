export function compareNumbers(targetNumber, userGuessNum){
    let results;  
    if (targetNumber === userGuessNum) {
        results.textContent = 'You WIN! Game Over!';
    }
    else if (targetNumber > userGuessNum) {
        results.textContent = 'You guessed too high';
    }
    else {
        results.textContent = 'You guessed too low';
    }
}