import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (Number.isNaN(num) || !Number.isFinite(num) || num % 1 || num < 2) return false;
  if (num % 2 === 0) return (num === 2);
  if (num % 3 === 0) return (num === 3);
  const loopLimit = Math.sqrt(num);
  // не представляю удачного названия для этой переменной:)
  // и здесь вроде как сказано что в счетчиках и индексах
  // можно использовать короткие названия переменных
  for (let i = 5; i <= loopLimit; i += 6) {
    if (num % i === 0) return false;
    if (num % (i + 2) === 0) return false;
  }
  return true;
};

const runBrainPrimeRound = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const correctRoundAnswer = (isPrime(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, correctRoundAnswer };
};

export default runBrainPrimeRound;
