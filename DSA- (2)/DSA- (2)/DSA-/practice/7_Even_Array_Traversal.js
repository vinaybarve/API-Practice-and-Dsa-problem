// Sample input 1
// 5
// 1 2 3 4 5

// Sample Output 1
// 1 3 5

let arr = [1, 2, 3, 4, 5];

function EvenArray(arr) {
  bag = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      bag = bag + arr[i] + " ";
    }
  }
  console.log(bag);
}
EvenArray(arr);
