// Using Two Pointer Approach
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const removeDuplicates = (nums: number[]): number => {
  let previousElement = -Infinity;
  let uniqueIndex = 0;

  for (const [index, num] of nums.entries()) {
    if (num !== previousElement) {
      swap(nums, index, uniqueIndex);
      previousElement = num;
      previousElement++;
    }
  }

  return uniqueIndex;
};

const swap = (nums: number[], index1: number, index2: number): void => {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
