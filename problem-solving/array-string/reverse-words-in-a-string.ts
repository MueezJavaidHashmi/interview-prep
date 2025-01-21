// Using word reversal algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const reverseWords = (s: string): string => {
  let reversedWords = '';
  let reversedWord = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      reversedWord += s[i];
    }

    if (reversedWord && s[i] === ' ') {
      reversedWords = reversedWord + (reversedWords ? ' ' : '') + reversedWords;
      reversedWord = '';
    }
  }

  return reversedWord ? reversedWord + (reversedWords ? ' ' : '') + reversedWords : reversedWords;
};
