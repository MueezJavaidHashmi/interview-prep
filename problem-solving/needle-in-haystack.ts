// Using Rabin-Karp algorithm
// Time Complexity --> O(N + M)
// Space Complexity -> O(1)
const strStr = (haystack: string, needle: string): number => {
  const base = 26;
  const prime = 1e9 + 7;

  const needleHash = computeHash(needle, needle.length, base, prime);
  let currentHash = computeHash(haystack, needle.length, base, prime);

  if (needleHash === currentHash && haystack.slice(0, needle.length) === needle) return 0;

  for (let i = 1; i <= haystack.length - needle.length; i++) {
    currentHash = updateHash(
      haystack,
      needle.length,
      currentHash,
      haystack[i - 1],
      haystack[i + needle.length - 1],
      base,
      prime,
    );

    if (currentHash === needleHash && haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
};

const computeHash = (s: string, patternLength: number, base: number, modulus: number): number => {
  let hash = 0;

  for (let i = 0; i < patternLength; i++) {
    hash = (hash * base + s.charCodeAt(i)) % modulus;
  }

  return hash;
};

const updateHash = (
  s: string,
  patternLength: number,
  oldHash: number,
  lastChar: string,
  currentChar: string,
  base: number,
  modulus: number,
): number => {
  let hash = oldHash;

  hash = (hash - lastChar.charCodeAt(0) * modularExponentiation(base, patternLength - 1, modulus)) % modulus;

  hash = (hash * base + currentChar.charCodeAt(0)) % modulus;

  return hash < 0 ? hash + modulus : hash;
}

const modularExponentiation = (base: number, exponent: number, modulus: number): number => {
  let result = 1;
  let currentBase = base % modulus;

  while (exponent > 0) {
    if (exponent % 2 === 1) result = (result * currentBase) % modulus;
    currentBase = (currentBase * currentBase) % modulus;
    exponent = Math.floor(exponent / 2);
  }

  return result;
}
