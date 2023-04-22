let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function reverseArray(array) {
  const stack = [];
  const reversedArray = [];

  // push each element of the array onto the stack
  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }

  // pop each element off the stack and add it to the reversed array
  while (stack.length > 0) {
    reversedArray.push(stack.pop());
  }

  return reversedArray.join(" ");
}
console.log(reverseArray(array))

