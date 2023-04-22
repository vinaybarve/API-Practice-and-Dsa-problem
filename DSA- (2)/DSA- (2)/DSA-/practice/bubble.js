let arr = [64, 27, 1, 6, 32, 24, 15, 9];

function solve(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}
solve(arr);

// function bubbleSort(arr) {
//     let swapped
//     do {
//       swapped = false
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i]
//           arr[i] = arr[i + 1]
//           arr[i + 1] = temp
//           swapped = true
//         }
//       }
//     } while (swapped)
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   bubbleSort(arr)
//   console.log(arr.join(" ")) // [-6, -2, 4, 8, 20]
  