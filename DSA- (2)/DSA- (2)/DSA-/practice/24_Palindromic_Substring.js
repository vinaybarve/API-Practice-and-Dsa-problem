// You are provided a stringS.
// Write a program that returns length of the longest
// palindromic substring of that string.

// Sample Input 1

// thisracecarisgood

// Sample Output 1

// 7

function checkPalindromic(string) {
  let str2 = string.split("");
  str2 = str2.reverse();
  str2 = str2.join("");

  if (string == str2) {
    return true;
  }
  return false;
}

let string = "thisracecarisgood";
const masaiPalSubString = (string) => {
  let max = -Infinity;
  for (let i = 0; i < string.length; i++) {
    let bag = "";
    for (let j = i; j < string.length; j++) {
      bag = bag + string[j];
      if (checkPalindromic(bag)) {
        if (bag.length > max) {
          max = bag.length;
        }
      }
    }
  }
  console.log(max);
};

masaiPalSubString(string);
