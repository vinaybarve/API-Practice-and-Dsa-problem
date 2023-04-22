let arr = [7, 1, 2, 3, 4, 5, 6];
function rotate(arr) {
  let bag = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}
rotate(arr);
