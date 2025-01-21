// Using greedy algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const jump = (nums: number[]): number => {
  let currentEnd = 0;
  let farthest = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (i === currentEnd) {
      currentEnd = farthest;
      jumps++;
    }
    if (currentEnd >= nums.length - 1) break;
  }

  return jumps;
};