// Using two pointer approach
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    if (sum > target) right--;
  }
};