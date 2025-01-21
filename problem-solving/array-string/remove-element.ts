// Using Two Pointer Approach
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const removeElement = (nums: number[], val: number): number => {
  let rightIndex = nums.length - 1;
  let leftIndex = 0;
  while (leftIndex <= rightIndex) {
    if (nums[leftIndex] === val) {
      swap(nums, leftIndex, rightIndex);
      rightIndex--;
    } else leftIndex++;
  }
  return rightIndex + 1;
};

const swap = (nums: number[], index1: number, index2: number): void => {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
