let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let N = 4;

function rotate(arr, N) {
  for (let i = 0; i < N; i++) {
    let bag = "";

    for (let j = N - 1; j >= 0; j--) {
      bag = bag + arr[i][j] + " ";
    }
    console.log(bag);
  }
}
rotate(arr, N);
