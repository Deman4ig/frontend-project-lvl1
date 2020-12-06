import readlineSync from 'readline-sync';

import validateResult from '../utils/validateResult.js';
import findGcd from '../utils/findGcd.js';

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  const firstNumber = Math.round(Math.random() * 100);
  const secondNumber = Math.round(Math.random() * 100);

  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber} \nYour answer: `);

  const correctAnswer = findGcd(firstNumber, secondNumber);

  return validateResult(Number(userAnswer), correctAnswer);
};
