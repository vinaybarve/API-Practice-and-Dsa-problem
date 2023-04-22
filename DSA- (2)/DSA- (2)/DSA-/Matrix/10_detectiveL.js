let N = 3;
let M = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function DetectiveL(N, M, matrix) {
  let left = 0;
  let right = M - 1;
  let top = 0;
  let bottom = N - 1;
  let bag = "";
  let count = 0;

  while (count < M * N) {
    for (let i = top; i <= bottom; i++) {
      bag += matrix[i][left] + " ";
      count++;
    }
    left++;
    for (let i = left; i <= right; i++) {
      bag += matrix[bottom][i] + " ";
      count++;
    }
    bottom--;
  }
  console.log(bag);
}

DetectiveL(N, M, matrix);
