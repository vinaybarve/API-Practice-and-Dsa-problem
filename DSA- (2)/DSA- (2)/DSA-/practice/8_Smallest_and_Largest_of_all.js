// Given an array,arrwhich has N integers.
// You need to print the smallest and largest element present in the array each on new lines

// Sample Input 1

// 4
// -2 0 8 4

// Sample Output 1

// -2
// 8

let n = 4;
let arr = [-2, 0, 8, 4];

function smallestAndLargestOfAll(n, arr) {
  let min = arr[0];
  let max = arr[0];
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(min);
  console.log(max);
}
smallestAndLargestOfAll(n, arr);
