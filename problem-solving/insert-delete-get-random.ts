// Using map and array
// Time Complexity insert function --> O(1)
// Time Complexity remove function --> O(1)
// Time Complexity getRandom function --> O(1)
// Space Complexity --> (N)
class RandomizedSet {
  private readonly map: Map<number, number>;
  private readonly elements: number[];

  private swap(nums: number[], index1: number, index2: number): void {
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];
  }

  constructor() {
    this.map = new Map();
    this.elements = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.map.set(val, this.elements.length);
    this.elements.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const indexToRemove = this.map.get(val);
    const lastIndex = this.elements.length - 1;

    this.map.set(this.elements[lastIndex], indexToRemove);
    this.swap(this.elements, indexToRemove, lastIndex);

    this.elements.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.elements.length);
    return this.elements[randomIndex];
  }
}