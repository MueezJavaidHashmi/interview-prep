// Using naive string searching algorithm
// Time Complexity --> O(N * M)
// Space Complexity -> O(1)
const strStr = (haystack: string, needle: string): number => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    while (j < needle.length && needle[j] === haystack[i + j]) j++;
    if (j === needle.length) return i;
  }

  return -1;
};
