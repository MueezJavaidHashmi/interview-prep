// Using merge sort
// Time Complexity --> O(N log N)
// Space Complexity -> O(N)
const hIndex = (citations: number[]): number => {
  citations.sort((a, b) => a - b);

  for (const [index, citation] of citations.entries()) {
    const remainingPapers = citations.length - index;
    if (citation >= remainingPapers) return remainingPapers;
  }
  return 0;
};


// Using count sort
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const hIndex2 = (citations: number[]): number => {
  const totalCitations = citations.length;
  const citationCounts = new Array(totalCitations + 1).fill(0);

  for (const citation of citations) {
    if (citation > totalCitations) citationCounts[totalCitations]++;
    else citationCounts[citation]++;
  }

  let total = 0;
  for (let i = totalCitations; i > 0; i--) {
    total += citationCounts[i];
    if (total >= i) return i;
  }

  return 0;
};
