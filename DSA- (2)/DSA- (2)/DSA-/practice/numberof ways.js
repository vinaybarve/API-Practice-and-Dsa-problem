let n = 4;

function rotate(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return rotate(n - 1) + rotate(n - 2) + rotate(n - 3);
}
console.log(rotate(n));
