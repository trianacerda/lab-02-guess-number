// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('userGuess is too high', (expect) => {
   
    const expected = +1;
    
   
    const actual = compareNumbers(1, 2);
 
    
    expect.equal(actual, expected);
});

test('userGuess is equal', (expect) => {
   
    const expected = 0;
    
   
    const actual = compareNumbers(1, 1);
 
    
    expect.equal(actual, expected);
});

test('userGuess is too low', (expect) => {
   
    const expected = -1;
    
   
    const actual = compareNumbers(1, 0);
 
    
    expect.equal(actual, expected);
});

