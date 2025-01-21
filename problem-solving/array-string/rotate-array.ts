const rotate = (nums: number[], k: number): void => {
  const rotations = k % nums.length;
  rotateArray(nums, 0, nums.length - 1);
  rotateArray(nums, 0, rotations - 1);
  rotateArray(nums, rotations, nums.length - 1);
}

const rotateArray = (nums: number[], leftIndex: number, rightIndex: number): void => {
  while (leftIndex < rightIndex) {
    swap(nums, leftIndex, rightIndex);
    leftIndex++;
    rightIndex--;
  }
}

const swap = (nums: number[], index1: number, index2: number): void => {
  [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
}
