// Using Two Pointer Approach
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const removeDuplicates = (nums: number[]): number => {
  let previousElement = -Infinity;
  let occurrences = 0;
  let uniqueIndex = 0;

  for (const [index, num] of nums.entries()) {
    if (num !== previousElement || occurrences < 2) {
      swap(nums, index, uniqueIndex);
      uniqueIndex++;
      occurrences = num === previousElement ? occurrences + 1 : 1;
      previousElement = num;
    }
  }

  return uniqueIndex;
};

const swap = (nums: number[], index1: number, index2: number): void => {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}