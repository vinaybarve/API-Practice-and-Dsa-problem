// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// You must write an algorithm that runs in O(n) time and without using the division operation.

// First testcase
// arr[1] = nums[2]*nums[3]*nums[4] = 24

// arr[2] = nums[1]*nums[3]*nums[4] = 12

// arr[3] = nums[1]*nums[2]*nums[4] = 8

// arr[4] = nums[1]*nums[2]*nums[3] = 6

// Sample Input 1

// 4
// 1 2 3 4

// Sample Output 1

// 24 12 8 6

let n = 4;

let arr = [1, 2, 3, 4];

function Product(n, arr) {
  let ans = [];
  let left = 1;
  let right = 1;
  for (let i = 0; i < arr.length; i++) {
    ans[i] = left;
    left = left * arr[i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    ans[i] = right * ans[i];
    right = right * arr[i];
  }
  console.log(ans.join(" "));
}

Product(n, arr) 