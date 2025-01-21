// Using greedy algorithm (needs a cleaner and more efficient solution)
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const fullJustify = (words: string[], maxWidth: number): string[] => {
  const lines: string[][] = [];

  let currentLength = 0;
  let currentWords: string[] = [];
  let lengths: number[] = [];
  for (const word of words) {
    if (currentLength + word.length + currentWords.length > maxWidth) {
      lines.push(currentWords);
      lengths.push(currentLength);
      currentLength = 0;
      currentWords = [];
    }
    currentWords.push(word)
    currentLength += word.length;
  }
  if (currentLength) lines.push(currentWords);
  if (currentLength) lengths.push(currentLength);

  const text: string[] = [];
  for (const [lineNumber, line] of lines.entries()) {
    let textLine = '';
    const length = lengths[lineNumber];

    let commonSpace = line.length === 1
      ? maxWidth - length
      : Math.floor((maxWidth - length) / (line.length - 1));
    let extraSpaces = line.length === 1
      ? 0
      : (maxWidth - length) % (line.length - 1);

    if (lineNumber === lines.length - 1) commonSpace = line.length > 1 ? 1 : 0;
    if (lineNumber === lines.length - 1) extraSpaces = 0;

    for (const [index, word] of line.entries()) {
      textLine += word;
      if (index !== line.length - 1 || line.length === 1) {
        textLine += ' '.repeat(commonSpace) + (index < extraSpaces ? ' ': '');
      }
    }
    if (lineNumber === lines.length - 1 && maxWidth > textLine.length) textLine += ' '.repeat(maxWidth - textLine.length);

    text.push(textLine);
  }

  return text;
};