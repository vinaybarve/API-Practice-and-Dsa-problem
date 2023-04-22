let n = 5;

function FactorialIterative(n) {
  var product = 1;
  for (i = 1; i <= n; i++) {
    product = product * i;
  }
  console.log(product);
}

FactorialIterative(n);
