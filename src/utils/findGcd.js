const findGcd = (a, b) => ((b) ? findGcd(b, a % b) : Math.abs(a));

export default findGcd;
