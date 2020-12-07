import readlineSync from 'readline-sync';

import validateResult from '../utils/validateResult.js';
import getRandomNumber from '../utils/getRandomNumber.js';

const operatorList = ['+', '-', '*'];

export default () => {
  console.log('What is the result of the expression?');
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const operatorID = getRandomNumber(0, (operatorList.length - 1));
  const operator = operatorList[operatorID];

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operator} ${secondOperand} \nYour answer: `);
  const correctAnswer = eval(firstOperand + operator + secondOperand);

  return validateResult(Number(userAnswer), correctAnswer);
};
