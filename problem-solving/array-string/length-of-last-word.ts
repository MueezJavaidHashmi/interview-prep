// Using greedy algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const lengthOfLastWord = (s: string): number => {
  let currentLength = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (currentLength > 0) break;
    } else {
      currentLength++;
    }
  }

  return currentLength;
};