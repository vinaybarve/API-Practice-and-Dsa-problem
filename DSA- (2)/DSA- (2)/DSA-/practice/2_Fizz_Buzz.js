// Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz”
// instead of the number, for the multiples of ‘5’ print “Buzz” and for multiples of both 5
// and 3 print "FizzBuzz"

// Sample Input
// input: N = 10

// Sample Output
// Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz

let N = 10;

function FizzBuzz(N) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(N);
