let N = 3;
let strings = ["masai", "school", "masai"];
function countNames(N, strings) {
  let str = strings.sort();
  var obj = {};
  var bag = 0;
  for (i = 0; i < N; i++) {
    bag = str[i];
    obj[bag] = obj[bag] || 0;
    obj[bag]++;
  }
  for (let key in obj) {
    console.log(key, obj[key]);
  }
}

countNames(N, strings);
