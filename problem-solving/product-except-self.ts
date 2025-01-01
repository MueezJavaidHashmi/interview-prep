// Using prefix and suffix product approach
// Time Complexity --> O(N)
// Space Complexity -> O(1) [answer array does not count]
const productExceptSelf = (nums: number[]): number[] => {
  const answer: number[] = new Array(nums.length).fill(1);

  let cumulativeLeftProduct = 1;
  let cumulativeRightProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= cumulativeLeftProduct;
    answer[nums.length - 1 - i] *= cumulativeRightProduct;
    cumulativeLeftProduct *= nums[i];
    cumulativeRightProduct *= nums[nums.length - 1 - i];
  }

  return answer;
};