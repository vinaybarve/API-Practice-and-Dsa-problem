let n = 4;
let arr = [1, 1, 1, 2];

function Major_elements(n, arr) {
  let x = Math.floor(n / 2);

  let obj = {};

  for (let i = 0; i < n; i++) {
    let y = arr[i];
    if (obj[y] === undefined) {
      obj[y] = 1;
    } else {
      obj[y]++;
    }
  }
  let ans = [];
  for (let key in obj) {
    if (obj[key] > x) {
      ans.push(key);
    }
  }

  if (ans.length === 0) {
    console.log(-1);
  } else {
    console.log(ans.join());
  }
}
Major_elements(n, arr);
