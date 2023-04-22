function findSubstring(str, pat, n, m) {
  if (m > n) {
    return -1;
  }

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (str[i + j] !== pat[j]) {
        break;
      }
    }
    if (j === m) {
      return [i, i + m - 1].join(" ");
    }
  }

  return -1;
}

// Example usage
const str = "abcbababaa";
const pat = "bab";
const n = str.length;
const m = pat.length;

const result = findSubstring(str, pat, n, m);
console.log(result); // Output: -1
