let arr = [1, 2, 4, 5, 6, 13, 32, 634, 2423, 213434, 44, 323];
let x = 6;

function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
console.log(search(arr, x));
