// You are given a matrix of size N x M.
// Print the spiral traversal of the matrix.
// input:
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12

// output:
// 9 5 1 2 3 4 8 12 11 10 6 7

let N = 3;
let M = 4;
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function RectangularMatrix(N, M, matrix) {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let bag = "";
  let count = 0;
  let total = N * M;

  while (count < total) {
    for (i = bottom; i >= top; i--) {
      bag = bag + matrix[i][left] + " ";
      count++;
    }
    left++;
    for (i = left; i <= right; i++) {
      bag = bag + matrix[top][i] + " ";
      count++;
    }
    top++;
    for (i = top; i <= bottom; i++) {
      bag = bag + matrix[i][right] + " ";
      count++;
    }
    right--;
    for (i = right; i >= left; i--) {
      bag = bag + matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
  }
  console.log(bag);
}

RectangularMatrix(N, M, matrix);
