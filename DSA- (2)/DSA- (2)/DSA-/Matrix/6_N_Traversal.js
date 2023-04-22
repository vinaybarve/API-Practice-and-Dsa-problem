// You are given a matrix of size n x n. Find theNtraversal of the matrix.

// input:
// 3;
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]

// Output :
// 7 4 1 5 9 6 3

let N = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function NTraversal(N, matrix) {
  let row = matrix.length - 1;
  let col = matrix[0].length;
  let bag = "";

  for (let i = row; i >= 0; i--) {
    bag = bag + matrix[i][0] + " ";
  }
  for (i = 1; i < matrix.length; i++) {
    bag = bag + matrix[i][i] + " ";
  }
  for (let i = matrix.length - 2; i >= 0; i--) {
    bag = bag + matrix[i][matrix.length - 1] + " ";
  }

  console.log(bag);
}

NTraversal(N, matrix);
