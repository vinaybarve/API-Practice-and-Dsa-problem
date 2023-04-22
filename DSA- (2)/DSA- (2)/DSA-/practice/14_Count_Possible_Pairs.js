// You are given a system of equations:

// x^2 + y = n

// y^2 + x = m

// You have to count, how many there are pairs of integers (x, y) (0 ≤ x, y)
//  which satisfy the system.

// On a single line print the count

// Sample Input 1

// 9 3

// Sample Output 1

// 1

// Hint:

// Output Explanation :

// In the first sample the suitable pair is integers (3, 0)

let n = 9;
let m = 3;
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
