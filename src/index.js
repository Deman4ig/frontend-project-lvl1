import getUserName from './cli.js';

import { rules } from './gameRules.js';

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

  console.log(`Congratulations, ${name}!`);
};
