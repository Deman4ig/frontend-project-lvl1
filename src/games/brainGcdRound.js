import getRandomNumber from '../utils/getRandomNumber.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => ((b) ? findGcd(b, a % b) : Math.abs(a));

const brainGcdRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const roundQuestion = `${firstNumber} ${secondNumber}`;
  const correctRoundAnswer = findGcd(firstNumber, secondNumber);

  return { roundQuestion, correctRoundAnswer };
};

export default brainGcdRound;
