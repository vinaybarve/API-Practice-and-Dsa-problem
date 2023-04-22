// Reverse N Traversal
// You are given a matrix of size n x n. Find the ReverseNtraversal of the matrix.

// input:
// 3;
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

// Output :
// 1 4 7 5 3 6 9

let N = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function NTraversal(N, matrix) {
  let bag = "";
  for (let ROW = 0, COL = 0; ROW < N; ROW++) {
    bag += matrix[ROW][COL] + " ";
  }
  for (let ROW = N - 2, COL = 1; ROW >= 0 && COL <= N; ROW--, COL++) {
    bag += matrix[ROW][COL] + " ";
  }
  for (let ROW = 1, COL = N - 1; ROW < N; ROW++) {
    bag += matrix[ROW][COL] + " ";
  }
  console.log(bag);
}

NTraversal(N, matrix);
