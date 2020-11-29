import brainEvenRound from './games/brainEvenRound.js';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let count = 0; count < 3; count += 1) {
    const result = brainEvenRound();
    if (!result) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}`);
};

export default brainEven;
