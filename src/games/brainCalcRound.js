import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import validateResult from '../utils/validateResult.js';

const operatorList = ['+', '-', '*'];

export const brainCalcRound = () => {
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const operatorID = getRandomNumber(0, (operatorList.length - 1));
  const operator = operatorList[operatorID];

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operator} ${secondOperand} \nYour answer: `);
  const correctAnswer = eval(firstOperand + operator + secondOperand);

  return validateResult(Number(userAnswer), correctAnswer);
};
