// Using greedy algorithm
// Time Complexity --> O(log N)
// Space Complexity -> O(1)
const intToRoman = (num: number): string => {
  let placeValue = 0;
  const romanMap: string[][] = [
    ['I', 'V', 'X'],
    ['X', 'L', 'C'],
    ['C', 'D', 'M'],
    ['M'],
  ];
  let romanNumeral = '';

  while (num > 0) {
    const remainder = num % 10;
    romanNumeral = convertDigit(remainder, romanMap[placeValue]) + romanNumeral;
    num = Math.floor(num / 10);
    placeValue++;
  }

  return romanNumeral;
};

const convertDigit = (digit: number, symbols: string[]): string => {
  const [one, five, ten] = symbols;

  switch (digit) {
    case 4:
      return one + five;
    case 9:
      return one + ten;
    default:
      return (digit >= 5 ? five : '') + one.repeat(digit % 5);
  }
};
