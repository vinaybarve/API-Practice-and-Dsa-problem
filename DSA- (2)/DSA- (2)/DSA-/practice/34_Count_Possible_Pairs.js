n = 3;
m = 9;
function countPossiblePairs(n, m) {
  if (n == 1 && m == 1) {
    console.log(2);
  } else if (n == m) {
    console.log(0);
  } else {
    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i * i + j == n && j * j + i == m) {
          count++;
        }
      }
    }
    console.log(count);
  }
}
countPossiblePairs(n, m);
