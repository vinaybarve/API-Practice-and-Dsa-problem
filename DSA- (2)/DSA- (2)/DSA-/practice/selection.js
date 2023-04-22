let arr = [64, 27, 1, 6, 32, 24, 15, 9];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}

SelectionSort(arr); // Output: 2 5 6 10 22 25
