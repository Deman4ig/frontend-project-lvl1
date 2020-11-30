import readlineSync from 'readline-sync';

import isEven from '../utils/isEven.js';
import validateResult from '../utils/validateResult.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = Math.round(Math.random() * 100);
  const userAnswer = readlineSync.question(`Question: ${number} \nYour answer: `);

  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return validateResult(userAnswer, correctAnswer);
};
