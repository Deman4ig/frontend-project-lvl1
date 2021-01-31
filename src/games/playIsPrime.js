import getRandomNumber from '../getRandomNumber.js';
import runGame from '../gameEngine.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (Number.isNaN(num) || !Number.isFinite(num) || num % 1 || num < 2) return false;
  if (num % 2 === 0) return (num === 2);
  if (num % 3 === 0) return (num === 3);
  const maxDivider = Math.sqrt(num);
  for (let i = 5; i <= maxDivider; i += 6) {
    if (num % i === 0) return false;
    if (num % (i + 2) === 0) return false;
  }
  return true;
};

const createIsPrimeTask = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const roundAnswer = (isPrime(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, roundAnswer };
};

const runPrimeNumberGame = () => runGame(createIsPrimeTask, gameDescription);

export default runPrimeNumberGame;
