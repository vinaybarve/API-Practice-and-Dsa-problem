function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--; // decrement i to account for removed element
    }
  }
  return arr.join(" ");
}
let arr = [1, 2, 4, 4, 6, 7, 8, 9, 9, 10];
console.log(removeDuplicates(arr));
