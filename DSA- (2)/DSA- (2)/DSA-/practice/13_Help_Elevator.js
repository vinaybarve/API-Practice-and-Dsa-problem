// You are programming an elevator that allows only persons with weight less than 85
// to enter it, otherwise it beeps. You are provided weight of n persons in form of an array.
// Your task is to print either Beep or Enter depending on weight of person.

// Effectively, write a program that iterates through an array of n elements and prints "Beep"
// (without quote) in a new line if weight is greater than or equal to 85,
// otherwise print "Enter" (without quote).

// Output N strings (either Beep or Enter depending on the value present)

// Sample Input 1

// 5
// 24 83 89 43 91

// Sample Output 1

// Enter
// Enter
// Beep
// Enter
// Beep

let N = 5;
let elements = [24, 83, 89, 43, 91];
function helpElevator(N, elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] >= 85) {
      console.log("Beep");
    } else {
      console.log("Enter");
    }
  }
}
helpElevator(N, elements);
