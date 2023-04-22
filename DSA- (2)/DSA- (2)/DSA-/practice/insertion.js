function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // Iterate through the array, starting from the second element (i=1)
    let numberToInsert = arr[i]; // Store the current element (number to be inserted) in a temporary variable
    let j = i - 1; // Initialize the index of the previous element (j) to compare with the numberToInsert

    // Compare the current element with the previous elements in the sorted portion of the array and shift them if needed
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]; // Shift the element to the right by one index
      j--; // Decrement j to compare with the previous element in the sorted portion of the array
    }

    // Insert the numberToInsert at the correct position in the sorted portion of the array
    arr[j + 1] = numberToInsert;
  }

  // Print the sorted array
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}

const arr = [8, 20, -2, 4, -6]; // Initialize an unsorted array
insertionSort(arr); // Call the insertionSort function on
