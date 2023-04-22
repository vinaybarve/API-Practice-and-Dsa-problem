// Given two strings, find whether one string (s2) can be formed by rotating another
//  string(s1).
// Example:For s1=”carbon”, s2=”boncar”, the output is "Yes" (without quotes)

// Output Format:
// Output Yes/No based on the conditions mentioned above

// Sample Input 1 :
// carbon
// boncar

// Sample Output 2:
// No

let str1 = "carbon";
let str2 = "boncar";

function stringRot(str1, str2) {
  if (str1 === str2) return "Yes";

  str2 = str2.split("");
  console.log(str2);
  for (let i = 0; i < str2.length; i++) {
    let ans = str2.shift();
    str2.push(ans);
    str2 = str2.join("");
    console.log(str2);
    if (str1 === str2) return "Yes";
    else str2 = str2.split("");
  }

  return "No";
}

console.log(stringRot(str1, str2));
