// You have an array of non-negative integers.
// You can perform one operation on it in which you can choose i-th index with
// 0 <= i < n and subtract 1 from both i-th and (i+1) th index of array.

// Your task is to write a program that can comment if it is possible to get an array
// of all zeros after several operations.

// Output Format:
// If it can be modified into all zeros with several operations output “YES” in
// a single line, otherwise output “NO” instead.

// Sample Input 1
// 2
// 1 2

// Sample Output 1
// NO

let n = 2;
let arr = [1, 2];
function arrofzeros(n, arr) {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < n; i++) {
    if ((i & 1) == 0) {
      count1 += arr[i];
    } else {
      count2 += arr[i];
    }
  }
  if (count1 == count2) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
arrofzeros(n, arr);
