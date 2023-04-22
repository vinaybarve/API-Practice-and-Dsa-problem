// Problem : Find Second Largest Number
// Given an array Arr of size N, print second largest distinct element from an array.
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation: The largest element of the
// array is 35 and the second largest element
// is 34.

let arr = [12, 35, 1, 10, 27, 1];
let n = 6;

function print2largest(arr, n) {
  let largest = arr[0];
  let secondLargest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(print2largest(arr, n));
