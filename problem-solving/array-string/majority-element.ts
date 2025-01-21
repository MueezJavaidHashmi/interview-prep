// Using Boyer-Moore Voting Algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const majorityElement = (nums: number[]): number => {
  let candidate: number | undefined;
  let count = 0;

  for (const num of nums) {
    if (count === 0) candidate = num;

    count += candidate === num ? 1 : -1;
  }

  return candidate!;
}