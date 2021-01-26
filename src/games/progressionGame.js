import getRandomNumber from '../getRandomNumber.js';
import runGame from '../gameEngine.js';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const firstNumber = getRandomNumber(0, 100);
  const commonDiff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const roundTask = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenIndex) {
      roundTask.push(firstNumber + commonDiff * i);
    } else {
      roundTask.push('..');
    }
  }
  const roundAnswer = (firstNumber + commonDiff * hiddenIndex).toString();
  const roundQuestion = roundTask.join(' ');

  return { roundQuestion, roundAnswer };
};

const runProgressionGame = () => runGame(progressionGame, gameDescription);

export default runProgressionGame;
