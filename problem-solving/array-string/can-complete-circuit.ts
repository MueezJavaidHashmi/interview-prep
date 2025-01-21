// Using greedy algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(1)
const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  let startStation = 0;
  let totalGasBalance = 0;
  let currentGasBalance = 0;

  for (let station = 0; station < gas.length; station++) {
    const netGasGain = gas[station] - cost[station];
    currentGasBalance += netGasGain;
    totalGasBalance += netGasGain;

    if (currentGasBalance < 0) {
      currentGasBalance = 0;
      startStation = station + 1;
    }
  }

  return totalGasBalance < 0 ? -1 : startStation;
};
