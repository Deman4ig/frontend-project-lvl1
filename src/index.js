import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const gameRounds = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');

export default (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(gameDescription);
  for (let count = 0; count < gameRounds; count += 1) {
    const { roundQuestion, correctRoundAnswer } = game();

    console.log(`Question: ${roundQuestion}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== correctRoundAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctRoundAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
