function FactorialRecursion(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  return num * FactorialRecursion(num - 1);
}

let num = 5;
console.log(FactorialRecursion(num));
