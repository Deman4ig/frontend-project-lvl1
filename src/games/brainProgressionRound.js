import readlineSync from 'readline-sync';
import validateResult from '../utils/validateResult.js';

const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);

const generateProgression = (firstNumber, increment, length) => {
  const progression = [firstNumber];
  do {
    progression.push(progression[progression.length - 1] + increment);
  } while (progression.length < length);

  return progression;
};

export default () => {
  console.log('Find the greatest common divisor of given numbers.');
  const firstNumber = Math.round(Math.random() * 100);
  const commonDiff = getRandomArbitrary(1, 10);
  const progressionLength = getRandomArbitrary(5, 10);
  const hiddenIndex = getRandomArbitrary(0, progressionLength);

  const progression = generateProgression(firstNumber, commonDiff, progressionLength);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')} \nYour answer: `);

  return validateResult(Number(userAnswer), correctAnswer);
};
