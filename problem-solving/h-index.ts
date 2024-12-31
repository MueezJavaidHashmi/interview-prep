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
