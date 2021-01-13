import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameRounds = 3;

export default (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(gameDescription);
  for (let count = 0; count < gameRounds; count += 1) {
    const { question, correctAnswer } = game();
    const userAnswer = readlineSync.question(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
