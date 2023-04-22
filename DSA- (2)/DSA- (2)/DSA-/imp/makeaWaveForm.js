let arr = [9, 8, 4, 10, 3, 6, 5, 7, 1, 2];

function makeawave(arr) {
  arr.sort((a, b) => a - b);
  let result = "";
  for (let i = 0; i < arr.length; i = i + 2) {
    result = result + `${arr[i + 1] + " "}` + `${arr[i] + " "}`;
  }
  console.log(result);
}
makeawave(arr);
