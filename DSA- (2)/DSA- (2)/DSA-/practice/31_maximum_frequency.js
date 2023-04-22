let N = 5;
let str = "abcda";
function string(N, str) {
  let obj = {};
  for (let i = 0; i < N; i++) {
    let char = str[i];
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  let max = -Infinity;
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }
  console.log(max);
}
string(N, str);
