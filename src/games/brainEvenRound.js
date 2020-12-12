import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import validateResult from '../utils/validateResult.js';

const isEven = (num) => (num % 2 === 0);

export const brainEvenRound = () => {
  const number = getRandomNumber(0, 100);
  const userAnswer = readlineSync.question(`Question: ${number} \nYour answer: `);

  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
