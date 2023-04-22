// You are given an array A of N integers.
//  Your task is to find the maximum number of times an odd number is continuously
//  repeated in the array.

//  Sample Input 1

// 12
// 1 1 1 1 2 2 2 2 2 1 1 1

// Sample Output 1

// 4

// Hint

// Sample 1 Explanation

// 1 is repeated 4 times from index 0 to index 3 => 4 times

// 2 is repeated 5 times from index 4 to index 8 => 5 times

// 1 is repeated 3 times from index 9 to index 11 => 3 times

// So, the output is 4 since 1 is odd.

let n = 12;
let arr = [1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1];
function longestRepeat(n, arr) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      let j = i;
      while (arr[j] == arr[i] && j < n) {
        j++;
      }
      count = Math.max(count, j - i);
      i = j;
    }
  }
  console.log(count);
}
longestRepeat(n, arr);
