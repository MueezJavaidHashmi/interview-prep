// Using two pointer approach
// Time Complexity --> O(N)
// Space Complexity --> O(1)
const trap = (heights: number[]): number => {
  let left = 0;
  let right = heights.length - 1;
  let maxLeftHeight = -Infinity;
  let maxRightHeight = -Infinity;
  let water = 0;

  while (left <= right) {
    maxLeftHeight = Math.max(maxLeftHeight, heights[left]);
    maxRightHeight = Math.max(maxRightHeight, heights[right]);
    if (maxLeftHeight < maxRightHeight) water += maxLeftHeight - heights[left++];
    else water += maxRightHeight - heights[right--];
  }

  return water;
};
