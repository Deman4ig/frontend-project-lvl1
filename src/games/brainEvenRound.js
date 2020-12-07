import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import isEven from '../utils/isEven.js';
import validateResult from '../utils/validateResult.js';

export const brainEvenRound = () => {
  const number = getRandomNumber(0, 100);
  const userAnswer = readlineSync.question(`Question: ${number} \nYour answer: `);

  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
