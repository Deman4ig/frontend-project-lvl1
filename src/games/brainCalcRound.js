import readlineSync from 'readline-sync';

import validateResult from '../utils/validateResult.js';

const operandArray = ['+', '-', '*'];

export default () => {
  console.log('What is the result of the expression?');
  const firstOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);
  const operand = operandArray[Math.round(Math.random() * (operandArray.length - 1))];

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operand} ${secondOperand} \nYour answer: `);
  const correctAnswer = eval(firstOperand + operand + secondOperand);

  return validateResult(Number(userAnswer), correctAnswer);
};
