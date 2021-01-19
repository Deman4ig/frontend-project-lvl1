import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const getUserAnswer = () => readlineSync.question('Your answer: ');
const getUserName = () => readlineSync.question('May I have your name? ');

export default (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let count = 0; count < gameRoundsCount; count += 1) {
    const { roundQuestion, roundAnswer } = game();

    console.log(`Question: ${roundQuestion}`);
    const userAnswer = getUserAnswer();

    if (userAnswer !== roundAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
