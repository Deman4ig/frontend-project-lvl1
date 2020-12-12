import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import validateResult from '../utils/validateResult.js';

const findGcd = (a, b) => ((b) ? findGcd(b, a % b) : Math.abs(a));

const brainGcdRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber} \nYour answer: `);

  const correctAnswer = findGcd(firstNumber, secondNumber);

  return validateResult(Number(userAnswer), correctAnswer);
};

export default brainGcdRound;
