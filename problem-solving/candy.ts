// Using greedy approach with two-pass strategy
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const candy = (ratings: number[]): number => {
  const n = ratings.length;
  const candies: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) candies[i] = Math.max(candies[i], candies[i + 1] + 1);
  }

  return candies.reduce((sum, candy) => sum + candy, 0);
};