let str = "abcab";
function subtstring(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let bag = "";
    for (let j = i; j < str.length; j++) {

      bag = bag + str[j];
      console.log(bag);
      if (bag[0] == bag[bag.length - 1]) {
        count++;
      }
    }
  }
  console.log(count);
}
subtstring(str);
