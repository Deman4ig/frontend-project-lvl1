import getRandomNumber from '../getRandomNumber.js';
import runGame from '../gameEngine.js';

const gameDescription = 'What is the result of the expression?';

const mathOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const calculatorGame = () => {
  const firstOperand = getRandomNumber(0, 100);
  const secondOperand = getRandomNumber(0, 100);
  const operators = [...Object.keys(mathOperations)];
  const mathOperation = [...Object.values(mathOperations)];
  const operatorID = getRandomNumber(0, (operators.length - 1));

  const roundAnswer = mathOperation[operatorID](firstOperand, secondOperand);
  const roundQuestion = `${firstOperand} ${operators[operatorID]} ${secondOperand}`;

  return { roundQuestion, roundAnswer };
};

const runCalcGame = () => runGame(calculatorGame, gameDescription);

export default runCalcGame;