import getRandomNumber from '../utils/getRandomNumber.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const brainEvenRound = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const correctRoundAnswer = (isEven(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, correctRoundAnswer };
};

export default brainEvenRound;
