import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (Number.isNaN(n) || !Number.isFinite(n) || n % 1 || n < 2) return false;
  if (n % 2 === 0) return (n === 2);
  if (n % 3 === 0) return (n === 3);
  const m = Math.sqrt(n);
  for (let i = 5; i <= m; i += 6) {
    if (n % i === 0) return false;
    if (n % (i + 2) === 0) return false;
  }
  return true;
};

const brainPrime = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const correctRoundAnswer = (isPrime(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, correctRoundAnswer };
};

export default brainPrime;
