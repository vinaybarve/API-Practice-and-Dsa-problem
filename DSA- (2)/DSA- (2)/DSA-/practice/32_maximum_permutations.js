// The given array is -2 5 1 6
// After rearranging, the array as -1 2 5 6,
//  multiplying them with the indexes of the array
//  as -1 * 0 + 2 * 1 + 5 * 2 + 6 * 3 = 30, which is the required output

let N = 6;
let arr = [2, 5, 1, 6, 7, 8];

function MaximumSumPermutation(N, arr) {
  let bag = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    bag = bag + arr[i] * i;
  }
  console.log(bag);
}
MaximumSumPermutation(N, arr);
