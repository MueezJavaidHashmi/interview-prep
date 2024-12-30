// Using greedy algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  }

  return maxProfit;
}