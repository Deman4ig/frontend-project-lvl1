import getUserName from './cli.js';

const rules = {
  brainEvenRound: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainProgressionRound: 'Find the greatest common divisor of given numbers.',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  brainGcdRound: 'Find the greatest common divisor of given numbers.',
  brainCalcRound: 'What is the result of the expression?'
}

export default (game) => {
  const name = getUserName();
  console.log(rules[game.name]);
  for (let count = 0; count < 3; count += 1) {
    const result = game();
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
