import getUserName from './cli.js';
// import printRules from './gameRules.js';

const gameRounds = 3;

export default (game, gameDescription) => {
  const name = getUserName();
  console.log(gameDescription);
  for (let count = 0; count < gameRounds; count += 1) {
    const result = game();
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
