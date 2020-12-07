import readlineSync from 'readline-sync';

import validateResult from '../utils/validateResult.js';
import isPrime from '../utils/isPrime.js';

export default () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const question = Math.round(Math.random() * 100);

  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
