import readlineSync from 'readline-sync';
import validateResult from '../utils/validateResult.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import getProgression from '../utils/getProgression.js';

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  const firstNumber = getRandomNumber(0, 100);
  const commonDiff = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength);

  const progression = generateProgression(firstNumber, commonDiff, progressionLength);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} \nYour answer: `);

  return validateResult(Number(userAnswer), correctAnswer);
};
