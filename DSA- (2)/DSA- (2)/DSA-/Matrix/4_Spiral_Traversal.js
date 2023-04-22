// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Sample Input 1

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9

// Sample Output 1

// 9 6 3 2 1 4 7 8 5

let N = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function spiralTraversalV(N, matrix) {
  let left = 0;
  let right = matrix.length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let bag = "";
  let count = 0;
  let total = N * N;

  while (count < total) {
    for (i = bottom; i >= top; i--) {
      bag = bag + matrix[i][right] + " ";
      count++;
    }
    right--;
    for (i = right; i >= left; i--) {
      bag = bag + matrix[top][i] + " ";
      count++;
    }
    top++;
    for (i = top; i <= bottom; i++) {
      bag = bag + matrix[i][left] + " ";
      count++;
    }
    left++;
    for (i = left; i <= right; i++) {
      bag = bag + matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
  }

  console.log(bag);
}
spiralTraversalV(N, matrix);
