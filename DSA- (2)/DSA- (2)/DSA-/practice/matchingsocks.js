let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;

function MatchingSocks(arr, n) {
  arr.sort(function (a, b) {
    return a - b;
  });
}

console.log(MatchingSocks(arr,n));
