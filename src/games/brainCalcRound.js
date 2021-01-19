import getRandomNumber from '../utils/getRandomNumber.js';

export const gameDescription = 'What is the result of the expression?';

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

  const correctRoundAnswer = mathFunction[operatorID](firstOperand, secondOperand);
  const roundQuestion = `${firstOperand} ${operators[operatorID]} ${secondOperand}`;

  return { roundQuestion, correctRoundAnswer };
};

export default brainCalcRound;
