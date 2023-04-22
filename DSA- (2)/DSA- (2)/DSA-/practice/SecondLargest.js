// Find the 2nd largest number in the array.

let arr = [5, 56, 39, 29, 12, 98, 100, 500];

function findSecondlargest(arr) {
  let largest = Math.max(arr[0], arr[1]);

  let secondlargest = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondlargest = largest;

      largest = arr[i];
    } else if (arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}

console.log(findSecondlargest(arr));
