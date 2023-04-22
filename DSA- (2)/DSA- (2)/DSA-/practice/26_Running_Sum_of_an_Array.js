let N = 5;
let arr = [1, 2, 3, 4, 5];
function sumArray(N, arr) {
  let sum = 0;
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    bag = bag + sum + " ";
  }
  console.log(bag);
}
sumArray(N, arr);
