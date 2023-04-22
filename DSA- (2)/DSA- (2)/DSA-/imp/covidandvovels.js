// Given a string S, find the number of substrings which contains all the v owels present in "coronavirus".
// Print count of substrings in a single line
// Let S="dangerouscovid"
// Output
// 4
let str = "dangerouscovid";
function vovelofcovid(str) {
  let n = str.length;
  let count = 0;
  for (let k = 0; k < n; k++) {
    let a = 0;
    let i = 0;
    let o = 0;
    let u = 0;
    for (let j = k; j < n; j++) {
      if (str[j] == "a") {
        a++;
      }
      if (str[j] == "i") {
        i++;
      }
      if (str[j] == "o") {
        o++;
      }
      if (str[j] == "u") {
        u++;
      }
      if (a > 0 && i > 0 && o > 0 && u > 0) {
        count++;
      }
    }
  }
  console.log(count);
}
vovelofcovid(str);
