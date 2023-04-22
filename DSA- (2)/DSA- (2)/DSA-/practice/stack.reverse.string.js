function reverseString(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedStr = "";
  while (stack.length > 0) {
    reversedStr = reversedStr + stack.pop();
  }
  return reversedStr;
}

let str = "shivam";
console.log(reverseString(str));
