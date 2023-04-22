// Given an array of integers, check if it contains duplicate element.
// If present then print YES else print NO.
// output YES or NO as described for each test case.

// Sample Input 1
// 3
// 1 2 3

// Sample Output 1
// NO

let n = 3;
let arr = [1, 2, 3];

function Check_duplicate(n, arr) {
  let ans = "NO";
  let obj = {};

  for (let i = 0; i < n; i++) {
    let x = arr[i];
    if (obj[x] === undefined) {
      obj[x] = 1;
    } else {
      obj[x]++;
    }
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      ans = "YES";
    }
  }
  console.log(ans);
}
Check_duplicate(n, arr);
