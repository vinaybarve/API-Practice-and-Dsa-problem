// The transpose of a matrix is an operator which flips a matrix over its diagonal,
// that is it switches the row and column of the matrix by producing another matrix.
// So, given an array of n rows and m columns, generate the transpose of the matrix.

// Sample Input 1

// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

// Sample Output 1

// 0 1 2 3 4
// 0 1 2 3 4
// 0 1 2 3 4
// 0 1 2 3 4

let N = 5;
let M = 4;
let matrix = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

function transposeTheMatrix(N, M, matrix) {
  for (let i = 0; i <= M - 1; i++) {
    let bag = "";

    for (let j = 0; j <= N - 1; j++) {
      bag = bag + matrix[j][i] + " ";
    }
    console.log(bag);
  }
}

transposeTheMatrix(N, M, matrix);
