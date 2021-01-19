import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'What number is missing in the progression?';

const runBrainProgressionRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const commonDiff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== hiddenIndex) {
      progression.push(firstNumber + commonDiff * i);
    } else {
      progression.push('..');
    }
  }
  const roundAnswer = firstNumber + commonDiff * hiddenIndex;
  const roundQuestion = `${progression.join(' ')}`;

  return { roundQuestion, roundAnswer };
};

export default runBrainProgressionRound;
