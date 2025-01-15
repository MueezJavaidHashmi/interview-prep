const reverseWords = (s: string): string => {
  const totalWords = countWords(s);

  return getLeftWords(s, Math.floor(totalWords / 2)) + (totalWords > 1 ? ' ' : '') + getRightWords(s, Math.ceil(totalWords / 2));
};

const getLeftWords = (s: string, numberOfWords: number): string => {
  let word = '';
  let leftWords = '';
  let countOfWords = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (countOfWords >= numberOfWords) break;

    if (char === ' ' && word) {
      countOfWords++;
      leftWords = leftWords + (leftWords ? ' ' : '') + word;
      word = '';
    } else {
      word = char + word;
    }
  }

  return leftWords;
}

const getRightWords = (s: string, numberOfWords: number): string => {
  let word = '';
  let rightWords = '';
  let countOfWords = 0;

  for (const char of s) {
    if (countOfWords >= numberOfWords) break;

    if (char === ' ' && word) {
      countOfWords++;
      rightWords = word + (rightWords ? ' ' : '') + rightWords;
      word = '';
    } else if (char !== ' ') {
      word += char;
    }
  }

  return rightWords;
}

const countWords = (s: string): number => {
  let word = '';
  let totalWords = 0;
  for (const char of s) {
    if (char === ' ' && word) {
      totalWords++;
      word = '';
    } else if (char !== ' ') {
      word += char;
    }
  }
  return word ? ++totalWords : totalWords;
}
