// Given a squarematrixof sizeN, turn it by 90 degrees in an anti-clockwise direction,
// as shown in sample input.

// Sample Input 1

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// Sample Output 1

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5

let N = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateBy90(N, matrix) {
  for (let i = N - 1; i >= 0; i--) {
    let bag = "";

    for (let j = 0; j <= N - 1; j++) {
      bag = bag + matrix[j][i] + " ";
    }
    console.log(bag);
  }
}
rotateBy90(N, matrix);
