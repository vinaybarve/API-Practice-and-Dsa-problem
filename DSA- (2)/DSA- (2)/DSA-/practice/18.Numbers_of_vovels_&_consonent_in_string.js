let str = "mynameisshivam";

function VovelConsonent(str) {
  let count = 0;
  let count2 = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    } else if (
      str[i] !== "a" ||
      str[i] !== "e" ||
      str[i] !== "i" ||
      str[i] !== "o" ||
      str[i] !== "u"
    ) {
      count2++;
    }
  }
  console.log("vovels : " + count);
  console.log("consonent : " + count2);
}
VovelConsonent(str);
