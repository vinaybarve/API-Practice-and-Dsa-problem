let array = [1, 2, 3];
let n = 3;
function findit(array, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[array[i]] == undefined) obj[array[i]] = 1;
    else obj[array[i]]++;
  }
  for (key in obj) {
    if (obj[key] > 1) console.log("Yes");
  }
  console.log("No");
}
findit(array, n);
