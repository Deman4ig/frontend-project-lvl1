export default (firstNumber, increment, length) => {
  const progression = [firstNumber];
  do {
    progression.push(progression[progression.length - 1] + increment);
  } while (progression.length < length);

  return progression;
};
