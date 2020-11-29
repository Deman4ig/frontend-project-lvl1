import readlineSync from 'readline-sync';

const even = (num) => (num % 2 === 0);

const brainEven = () => {
  const number = Math.round(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${number} \nYour answer: `);

  const correctAnswer = (even(number)) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default brainEven;
