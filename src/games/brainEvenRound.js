import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const runBrainEvenRound = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const roundAnswer = (isEven(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, roundAnswer };
};

export default runBrainEvenRound;
