// Using greedy algorithm using a map
// Time Complexity --> O(N)
// Space Complexity --> O(1)
const numeralMap: Record<string, number> = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    const twoDigitNumeral = numeralMap[s[i] + s[i + 1]];
    integer += twoDigitNumeral ?? numeralMap[s[i]];
    i += twoDigitNumeral ? 1 : 0;
  }
  return integer;
};
