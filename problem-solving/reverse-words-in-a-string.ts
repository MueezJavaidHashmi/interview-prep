// Personal solution if strings were mutable in javascript
const reverseWords = (s: string): string => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    swap(s, i, s.length - 1 - i);
  }

  let leftIndex = -1;
  let rightIndex = -1;

  for (let i = 0; i < s.length; i++) {
    if (leftIndex === -1 && s[i] !== ' ') leftIndex = i;
    if (leftIndex > -1 && s[i] !== ' ') rightIndex = i;

    if (rightIndex > -1 && s[i] === ' ') {
      swap(s, leftIndex, rightIndex);
      leftIndex = -1;
      rightIndex = -1;
    }
  }

  if (rightIndex > -1) swap(s, leftIndex, rightIndex);

  return s;
};

const swap = (s: string, index1: number, index2: number): void => {
  [s[index1], s[index2]] = [s[index2], s[index1]];
}
