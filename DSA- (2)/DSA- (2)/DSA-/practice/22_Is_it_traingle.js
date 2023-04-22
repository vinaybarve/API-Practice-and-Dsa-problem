// Given the lengths of 3 sticks,
// find out if it is possible to form a triangle of a positive area.
// (Non-Degenerate Triangle).

// Sample Input
// 4
// 4 5 13
// 7 1 8
// 2 5 4
// 2 2 2

// Sample Output
// No
// No
// Yes
// Yes

let arr = [2, 2, 2];

const Triangle = (arr) => {
  a = arr[0];
  b = arr[1];
  c = arr[2];

  if (a + b > c && b + c > a && a + c > b) {
    console.log("Yes its a triangle");
  } else {
    console.log("No its  not a triangle");
  }

};
Triangle(arr);
