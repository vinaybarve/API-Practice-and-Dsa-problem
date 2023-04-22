// Count the frequency of a given character in the given String javascriot

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

const str = "Hello World";
const char = "l";
const count = countChar(str, char);
console.log(
  `The character '${char}' appears ${count} times in the string '${str}'`
);
