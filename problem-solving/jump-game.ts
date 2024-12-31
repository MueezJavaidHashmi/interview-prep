const canJump = (nums: number[]): boolean => {
  let targetIndex = nums.length - 1;

  for (let i = targetIndex; i >= 0; i--) {
    if (i + nums[i] >= targetIndex) targetIndex = i;
  }

  return targetIndex === 0;
}