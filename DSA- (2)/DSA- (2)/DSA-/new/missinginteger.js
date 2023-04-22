/**
 
Missing Integer
Input = 4 5 1 3 
Output = 2
 */

let arr = [4, 5, 1, 3];

function findMissingInteger(arr) {
  const n = arr.length + 1; // One integer is missing, so the length of the array is n - 1.
  let sum = 0;

  // Calculate the sum of integers from 1 to n.
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(sum);
  }

  // Subtract the sum of the array from the sum of integers from 1 to n to get the missing integer.
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
  }

  return sum;
}

console.log(findMissingInteger(arr));
