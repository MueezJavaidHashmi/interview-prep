// Using two pointer algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const isPalindrome = (s: string): boolean => {
  const cleanedString = s.toLowerCase().replace(/^[a-z][0-9]/g, '');
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (cleanedString[left++] !== cleanedString[right--]) return false;
  }

  return true;
};
