// Using zigzag conversion algorithm
// Time Complexity --> O(N)
// Space Complexity -> O(N)
const convert = (str: string, numRows: number): string => {
  if (numRows === 1) return str;

  const rows = new Array(numRows).fill('');

  let goingDown = true;
  let row = 0;

  for (const char of str) {
    rows[row] += char;
    row += goingDown ? 1 : -1;
    if (row === 0 || row === numRows - 1) goingDown = !goingDown;
  }

  return rows.join('');
};
