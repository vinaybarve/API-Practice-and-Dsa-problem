function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]!== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result.join(' ');;
}

const arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log(removeDuplicates(arr)); 
// Output: [1, 2, 3, 4, 5]
