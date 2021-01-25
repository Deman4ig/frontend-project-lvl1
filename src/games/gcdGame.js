import getRandomNumber from '../getRandomNumber.js';
import runGame from '../gameEngine.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => ((b) ? findGcd(b, a % b) : Math.abs(a));

const gcdGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const roundQuestion = `${firstNumber} ${secondNumber}`;
  const roundAnswer = findGcd(firstNumber, secondNumber);

  return { roundQuestion, roundAnswer };
};

const runGcdGame = () => runGame(gcdGame, gameDescription);

export default runGcdGame;
