let arr = [3, 0, 6, 2, 7];
let k = 9;
function countSuchPairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        count++;
      }
    }
  }
  console.log(count);
}
countSuchPairs(arr, k);
