import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => ((b) ? findGcd(b, a % b) : Math.abs(a));

const runBrainGcdRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const roundQuestion = `${firstNumber} ${secondNumber}`;
  const roundAnswer = findGcd(firstNumber, secondNumber);

  return { roundQuestion, roundAnswer };
};

export default runBrainGcdRound;
