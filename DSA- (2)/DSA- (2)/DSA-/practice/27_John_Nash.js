let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
function JohnNashSets(arr, arr2) {
  let obj = {};
  let array = arr.concat(arr2);
  for (let i = 0; i < array.length; i++) {
    let y = array[i];
    if (obj[y] === undefined) {
      obj[y] = 1;
    }
    obj[y]++;
  }
  let result = [];
  for (let key in obj) {
    result.push(key);
  }
  result.sort(function (u, v) {
    return u - v;
  });

  console.log(result.join(" "));
}
JohnNashSets(arr, arr2);
