const maxProfit = (prices: number[]): number => {
  let maximumProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) maximumProfit += prices[i] - prices[i - 1];
  }

  return maximumProfit;
}