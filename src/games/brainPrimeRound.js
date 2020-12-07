import readlineSync from 'readline-sync';

import validateResult from '../utils/validateResult.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import isPrime from '../utils/isPrime.js';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const question = getRandomNumber(0, 100);

  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
