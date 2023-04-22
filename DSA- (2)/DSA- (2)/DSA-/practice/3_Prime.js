// Given an integer N. Check whether N is prime or not.

// Sample Input
// input: N = 10
// Sample Output
// Output: No

// Sample Input
// input: N = 7
// Sample Output
// Output: Yes

let number = 97;
function primeornot(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
}
primeornot(number);
