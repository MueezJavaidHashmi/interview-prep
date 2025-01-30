const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) result.push([i, left, right]);
      if (sum < 0) left++;
      if (sum > 0) right--;
    }
  }

  return result;
};