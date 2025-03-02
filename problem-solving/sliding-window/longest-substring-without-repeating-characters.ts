// Using sliding window approach
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const lengthOfLongestSubstring = (s: string): number => {
  let left = 0, maxLength = 0;
  const lastOccurrences = new Map();

  for (let right = 0; right < s.length; right++) {
    const lastOccurrence = lastOccurrences.get(s[right]);

    if (lastOccurrence >= left) left = lastOccurrence + 1;

    maxLength = Math.max(maxLength, right - left + 1);

    lastOccurrences.set(s[right], right);
  }

  return maxLength;
};
