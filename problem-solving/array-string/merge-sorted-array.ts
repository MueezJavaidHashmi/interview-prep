// Using Two Pointer Approach
// Time Complexity --> O(N + M)
// Space Complexity -> O(1)
const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  let lastNums1 = m - 1;
  let lastNums2 = n - 1;

  for (let lastIndex = m + n - 1; lastIndex >= 0 && lastNums2 >= 0; lastIndex--) {
    if (lastNums1 >= 0 && nums1[lastNums1] > nums2[lastNums2]) {
      nums1[lastIndex] = nums1[lastNums1];
      lastNums1--;
    } else {
      nums1[lastIndex] = nums2[lastNums2];
      lastNums2--;
    }
  }
};
