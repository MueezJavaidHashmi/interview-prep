// Using greedy algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(price, minPrice);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}