import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'What is the result of the expression?';

const mathOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const runBrainCalcRound = () => {
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const operators = [...Object.keys(mathOperations)];
  const mathFunction = [...Object.values(mathOperations)];
  const operatorID = getRandomNumber(0, (operators.length - 1));

  const roundAnswer = mathFunction[operatorID](firstOperand, secondOperand);
  const roundQuestion = `${firstOperand} ${operators[operatorID]} ${secondOperand}`;

  return { roundQuestion, roundAnswer };
};

export default runBrainCalcRound;
