import getRandomNumber from '../utils/getRandomNumber.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const brainEvenRound = () => {
  const number = getRandomNumber(0, 100);
  const question = `Question: ${number} \nYour answer: `;

  const correctAnswer = (isEven(number)) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default brainEvenRound;
