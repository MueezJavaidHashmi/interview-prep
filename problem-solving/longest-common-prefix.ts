// Using horizontal scaling algorithm
// Time Complexity --> O(N * M)
// Space Complexity -> O(1)
const longestCommonPrefix = (strs: string[]): string => {
  let prefix = strs[0];

  for (const str of strs) {
    let newPrefix = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== prefix[i]) break;
      newPrefix += prefix[i];
    }
    prefix = newPrefix;
  }

  return prefix;
};