import getRandomNumber from '../getRandomNumber.js';
import runGame from '../gameEngine.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const createIsEvenTask = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const roundAnswer = (isEven(roundQuestion)) ? 'yes' : 'no';

  return { roundQuestion, roundAnswer };
};

const runEvenNumberGame = () => runGame(createIsEvenTask, gameDescription);

export default runEvenNumberGame;
