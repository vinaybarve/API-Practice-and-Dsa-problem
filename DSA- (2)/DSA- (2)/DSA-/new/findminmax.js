// Problem : Find Min and Max in Arr;

n = 6;
arr = [3, 2, 1, 56, 10000, 167];

function getMinMax(arr, n) {
  let max = arr[0];
  let min = arr[0];
  let newarr = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  newarr.push(min);
  newarr.push(max);
  return newarr;
}

let res = getMinMax(arr, n);
console.log(res);
