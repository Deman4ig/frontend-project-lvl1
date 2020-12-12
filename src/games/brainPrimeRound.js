import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import validateResult from '../utils/validateResult.js';

const isPrime = (n) => {
  if (Number.isNaN(n) || !Number.isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 === 0) return (n === 2);
  if (n % 3 === 0) return (n === 3);
  const m = Math.sqrt(n);
  for (let i = 5; i <= m; i += 6) {
    if (n % i === 0) return false;
    if (n % (i + 2) === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const question = getRandomNumber(0, 100);

  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};

export default brainPrime;
