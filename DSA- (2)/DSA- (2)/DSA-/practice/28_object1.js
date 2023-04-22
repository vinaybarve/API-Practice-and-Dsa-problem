let str = "shivamsherje";

function object1(str) {

  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (obj[char] == undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  for (key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
object1(str);
