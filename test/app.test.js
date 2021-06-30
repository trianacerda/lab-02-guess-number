// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

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

