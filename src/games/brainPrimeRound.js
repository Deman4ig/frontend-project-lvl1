import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';
import validateResult from '../utils/validateResult.js';

export const brainPrime = () => {
  const question = getRandomNumber(0, 100);

  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
