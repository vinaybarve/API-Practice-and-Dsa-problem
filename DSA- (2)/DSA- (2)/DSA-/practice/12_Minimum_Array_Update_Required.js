// You are given an array having N integer values. You are also provided an integer K.
// You can update every element of the array by incrementing it by 1 in 1 second.
// Your task is to write a program that calculates the minimum time required (in seconds)
// to make every element of the array greater than or equal to K.

// Output one number, which is the minimum number of steps required to make every element
//  of the array greater than or equal to K.

//  Sample Input 1

// 3 4
// 1 2 5

// Sample Output 1

// 3
let n = 3;
let k = 4;
let arr = [1, 2, 5];

function Minimum(n, k, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let x = arr[0];
  if (k < x) {
    console.log(0);
  } else {
    console.log(k - x);
  }
}

Minimum(n, k, arr);
