// Using two pointer approach
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const isSubsequence = (s: string, t: string): boolean => {
  let sPointer = 0;
  let tPointer = 0;

  while (sPointer < s.length && tPointer < t.length)
    if (s[sPointer] === t[tPointer++]) sPointer++;

  return sPointer === s.length;
};