import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const getUserAnswer = (question) => readlineSync.question(question);

const gameEngine = (game, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const name = getUserAnswer('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  for (let count = 0; count < gameRoundsCount; count += 1) {
    const { roundQuestion, roundAnswer } = game();

    console.log(`Question: ${roundQuestion}`);
    const userAnswer = getUserAnswer('Your answer: ');

    if (userAnswer !== roundAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${roundAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
