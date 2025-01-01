// Using prefix and suffix product approach
// Time Complexity --> O(N)
// Space Complexity -> O(1) [answer array does not count]
const productExceptSelf = (nums: number[]): number[] => {
  const n = nums.length;
  const answer: number[] = new Array(n).fill(1);

  let cumulativeLeftProduct = 1;
  for (let i = 1; i < n; i++) {
    cumulativeLeftProduct *= nums[i - 1];
    answer[i] *= cumulativeLeftProduct;
  }

  let cumulativeRightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    cumulativeRightProduct *= nums[i + 1];
    answer[i] *= cumulativeRightProduct;
  }

  return answer;
};