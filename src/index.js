import getUserName from './cli.js';

export default (game) => {
  const name = getUserName();
  for (let count = 0; count < 3; count += 1) {
    const result = game();
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};
