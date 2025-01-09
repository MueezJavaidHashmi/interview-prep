// Using two passes approach
// Time Complexity --> O(N)
// Space Complexity --> O(N)
const trap = (heights: number[]): number => {
  const waters: number[] = Array(heights.length).fill(0);

  let max = 0;
  let maxIndex = -1;
  for (const [index, height] of heights.entries()) {
    if (height >= max) {
      for (let j = maxIndex + 1; j < index; j++) waters[j] = max - heights[j];
      max = height;
      maxIndex = index;
    }
  }

  max = 0;
  maxIndex = heights.length;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] >= max) {
      for (let j = maxIndex - 1; j > i; j--) waters[j] = max - heights[j];
      max = heights[i];
      maxIndex = i;
    }
  }

  return waters.reduce((sum, water) => sum + water, 0);
};
