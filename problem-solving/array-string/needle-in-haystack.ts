// Using Knuth-Morris-Pratt algorithm
// Time Complexity --> O(N + M)
// Space Complexity -> O(M)
const strStr = (haystack: string, needle: string): number => {
  const lpsArray = createLpsArray(needle);

  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && needle[j] !== haystack[i]) j = lpsArray[j - 1];

    if (needle[j] === haystack[i]) j++;

    if (j === needle.length) return i - j + 1;
  }

  return -1;
}

const createLpsArray = (needle: string): number[] => {
  const lpsArray: number[] = new Array(needle.length).fill(0);

  let len = 0;
  for (let i = 1; i < needle.length; i++) {
    while (len > 0 && needle[i] !== needle[len]) len = lpsArray[len - 1];

    if (needle[i] === needle[len]) len++;

    lpsArray[i] = len;
  }

  return lpsArray;
};
