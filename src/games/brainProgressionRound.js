import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'What number is missing in the progression?';

const genProgression = (firstNumber, increment, length) => {
  const progression = [firstNumber];
  do {
    progression.push(progression[progression.length - 1] + increment);
  } while (progression.length < length);

  return progression;
};

const runBrainProgressionRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const commonDiff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = genProgression(firstNumber, commonDiff, progressionLength);

  const correctRoundAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const roundQuestion = `${progression.join(' ')}`;

  return { roundQuestion, correctRoundAnswer };
};

export default runBrainProgressionRound;
