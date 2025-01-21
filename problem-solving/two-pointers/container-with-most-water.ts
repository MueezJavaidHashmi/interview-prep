// Using two pointer approach
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(currentArea, maxArea);

    if (height[left] > height[right]) right--;
    else left++;
  }

  return maxArea;
};