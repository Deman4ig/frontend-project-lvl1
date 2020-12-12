import readlineSync from 'readline-sync';

import getRandomNumber from '../utils/getRandomNumber.js';
import validateResult from '../utils/validateResult.js';

const operatorList = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const brainCalcRound = () => {
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const operators = [...Object.keys(operatorList)];
  const mathFunction = [...Object.values(operatorList)];
  const operatorID = getRandomNumber(0, (operators.length - 1));

  const correctAnswer = mathFunction[operatorID](firstOperand, secondOperand);
  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operators[operatorID]} ${secondOperand} \nYour answer: `);
  return validateResult(Number(userAnswer), correctAnswer);
};

export default brainCalcRound;
